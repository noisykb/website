#!/usr/bin/env python3
"""Download the original WordPress media library into public/media."""

from __future__ import annotations

import json
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.request import Request, urlopen


def download(item: dict[str, object], destination: Path) -> tuple[str, str]:
    relative_path = str(item["path"])
    target = destination / relative_path
    if target.exists() and target.stat().st_size > 0:
        return relative_path, "cached"

    target.parent.mkdir(parents=True, exist_ok=True)
    source_url = str(item["sourceUrl"]).replace("https://", "http://", 1)
    request = Request(source_url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(request, timeout=45) as response:
        payload = response.read()
    if not payload:
        raise RuntimeError("empty response")
    target.write_bytes(payload)
    return relative_path, "downloaded"


def main() -> None:
    manifest_path = Path(sys.argv[1] if len(sys.argv) > 1 else "content/media-manifest.json")
    destination = Path(sys.argv[2] if len(sys.argv) > 2 else "public/media")
    media = json.loads(manifest_path.read_text(encoding="utf-8"))

    completed = 0
    failures: list[tuple[str, str]] = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        jobs = {pool.submit(download, item, destination): item for item in media}
        for future in as_completed(jobs):
            item = jobs[future]
            try:
                future.result()
                completed += 1
            except Exception as error:  # Keep the successful archive when one legacy file is missing.
                failures.append((str(item["path"]), str(error)))

    print(f"Downloaded or retained {completed}/{len(media)} media files")
    for path, error in failures:
        print(f"FAILED {path}: {error}")
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
