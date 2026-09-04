#!/usr/bin/env python3
"""Extract published WordPress content into static JSON files."""

from __future__ import annotations

import json
import re
import sys
from html import escape, unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


def mysql_unescape(token: str):
    token = token.strip()
    if token == "NULL":
        return None
    if not (token.startswith("'") and token.endswith("'")):
        return token
    source = token[1:-1]
    mapping = {"0": "\0", "n": "\n", "r": "\r", "Z": "\x1a", "'": "'", '"': '"', "\\": "\\"}
    result: list[str] = []
    index = 0
    while index < len(source):
        if source[index] == "\\" and index + 1 < len(source):
            index += 1
            result.append(mapping.get(source[index], source[index]))
        else:
            result.append(source[index])
        index += 1
    return "".join(result)


def split_tuple(raw: str):
    values: list[str] = []
    start = 0
    quoted = False
    escaped = False
    for index, char in enumerate(raw):
        if quoted:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == "'":
                quoted = False
        elif char == "'":
            quoted = True
        elif char == ",":
            values.append(raw[start:index])
            start = index + 1
    values.append(raw[start:])
    return [mysql_unescape(value) for value in values]


def insert_rows(sql: str, table: str):
    marker = f"INSERT INTO `{table}`"
    position = 0
    while True:
        statement = sql.find(marker, position)
        if statement < 0:
            return
        columns_start = sql.find("(", statement + len(marker))
        columns_end = sql.find(") VALUES", columns_start)
        columns = [value.strip().strip("`") for value in sql[columns_start + 1 : columns_end].split(",")]
        index = columns_end + len(") VALUES")
        quoted = escaped = False
        depth = 0
        tuple_start = None
        while index < len(sql):
            char = sql[index]
            if quoted:
                if escaped:
                    escaped = False
                elif char == "\\":
                    escaped = True
                elif char == "'":
                    quoted = False
            else:
                if char == "'":
                    quoted = True
                elif char == "(":
                    if depth == 0:
                        tuple_start = index + 1
                    depth += 1
                elif char == ")":
                    depth -= 1
                    if depth == 0 and tuple_start is not None:
                        values = split_tuple(sql[tuple_start:index])
                        if len(values) == len(columns):
                            yield dict(zip(columns, values))
                        tuple_start = None
                elif char == ";" and depth == 0:
                    position = index + 1
                    break
            index += 1
        else:
            return


def localize_url(value: str) -> str:
    for origin in (
        "http://noisykb.infinityfreeapp.com",
        "https://noisykb.infinityfreeapp.com",
        "http://noisy-kinball.com",
        "https://noisy-kinball.com",
    ):
        if value.startswith(origin):
            return value[len(origin) :] or "/"
    return value


def localize_media_url(value: str) -> str:
    parsed = urlparse(value)
    marker = "/wp-content/uploads/"
    if marker not in parsed.path:
        return value
    media_path = parsed.path.split(marker, 1)[1]
    media_path = re.sub(r"-\d+x\d+(?=\.[^.]+$)", "", media_path)
    return f"/media/{media_path}"


class Sanitizer(HTMLParser):
    allowed = {"p", "h2", "h3", "h4", "ul", "ol", "li", "strong", "em", "a", "blockquote", "br", "figure", "figcaption", "img"}
    void = {"br", "img"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.output: list[str] = []
        self.skip_depth = 0

    def handle_starttag(self, tag, attrs):
        if tag in {"script", "style", "iframe"}:
            self.skip_depth += 1
            return
        if self.skip_depth or tag not in self.allowed:
            return
        if tag == "img":
            source = next((value for key, value in attrs if key == "src"), None)
            if not source:
                return
            alt = next((value for key, value in attrs if key == "alt"), "") or ""
            width = next((value for key, value in attrs if key == "width" and str(value).isdigit()), None)
            height = next((value for key, value in attrs if key == "height" and str(value).isdigit()), None)
            dimensions = f' width="{width}" height="{height}"' if width and height else ""
            self.output.append(
                f'<img src="{escape(localize_media_url(source), quote=True)}" alt="{escape(alt, quote=True)}"{dimensions} loading="lazy">'
            )
            return
        if tag == "a":
            href = next((value for key, value in attrs if key == "href"), None)
            if href:
                href = localize_url(href)
                parsed = urlparse(href)
                if parsed.scheme in {"", "http", "https", "mailto"}:
                    escaped_href = href.replace("&", "&amp;").replace('"', "&quot;")
                    external = parsed.scheme in {"http", "https"}
                    extra = ' target="_blank" rel="noreferrer"' if external else ""
                    self.output.append(f'<a href="{escaped_href}"{extra}>')
                    return
            self.output.append("<a>")
            return
        self.output.append(f"<{tag}>")

    def handle_endtag(self, tag):
        if tag in {"script", "style", "iframe"}:
            self.skip_depth = max(0, self.skip_depth - 1)
            return
        if not self.skip_depth and tag in self.allowed and tag not in self.void:
            self.output.append(f"</{tag}>")

    def handle_data(self, data):
        if not self.skip_depth:
            self.output.append(data.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def clean_html(source: str) -> str:
    source = re.sub(r"<!--.*?-->", "", source, flags=re.S)
    parser = Sanitizer()
    parser.feed(source)
    value = "".join(parser.output)
    value = re.sub(r"<p>\s*</p>|<h[2-4]>\s*</h[2-4]>", "", value)
    return value.strip()


def plain_text(source: str) -> str:
    value = re.sub(r"<[^>]+>", " ", source)
    return re.sub(r"\s+", " ", unescape(value)).strip()


def main() -> None:
    sql_path = Path(sys.argv[1] if len(sys.argv) > 1 else "../work/db-export/wordpress-export.sql")
    destination = Path(sys.argv[2] if len(sys.argv) > 2 else "content")
    sql = sql_path.read_text(encoding="utf-8", errors="replace")
    posts = list(insert_rows(sql, "wp_posts"))
    meta_rows = list(insert_rows(sql, "wp_postmeta"))

    meta_by_post: dict[str, dict[str, str]] = {}
    for row in meta_rows:
        if row["meta_value"] is not None:
            meta_by_post.setdefault(str(row["post_id"]), {})[str(row["meta_key"])] = str(row["meta_value"])

    published = [
        row
        for row in posts
        if row["post_status"] == "publish" and row["post_type"] in {"page", "post"}
    ]
    records = []
    for row in published:
        body_html = clean_html(str(row["post_content"] or ""))
        text_value = plain_text(body_html)
        records.append(
            {
                "id": int(row["ID"]),
                "type": row["post_type"],
                "title": unescape(str(row["post_title"])),
                "slug": row["post_name"],
                "publishedAt": row["post_date"],
                "updatedAt": row["post_modified"],
                "excerpt": (text_value[:197].rstrip() + "…") if len(text_value) > 200 else text_value,
                "bodyHtml": body_html,
                "legacyUrl": localize_url(str(row["guid"])),
                "featuredMediaId": meta_by_post.get(str(row["ID"]), {}).get("_thumbnail_id"),
            }
        )

    attachment_paths = {
        post_id: values["_wp_attached_file"]
        for post_id, values in meta_by_post.items()
        if "_wp_attached_file" in values
    }
    attachments = []
    for row in posts:
        if row["post_type"] != "attachment":
            continue
        attachment_id = str(row["ID"])
        path = attachment_paths.get(attachment_id)
        if not path:
            continue
        attachments.append(
            {
                "id": int(attachment_id),
                "title": unescape(str(row["post_title"])),
                "path": path,
                "sourceUrl": f"https://noisykb.infinityfreeapp.com/wp-content/uploads/{path}",
                "mimeType": row["post_mime_type"],
            }
        )

    destination.mkdir(parents=True, exist_ok=True)
    (destination / "wordpress-content.json").write_text(
        json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (destination / "media-manifest.json").write_text(
        json.dumps(attachments, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Extracted {len(records)} published records and {len(attachments)} attachments")


if __name__ == "__main__":
    main()
