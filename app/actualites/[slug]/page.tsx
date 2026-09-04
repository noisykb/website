import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';
import { articles, formatFrenchDate, getArticle } from '@/lib/content';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <main>
        <PageHero eyebrow={formatFrenchDate(article.publishedAt)} title={article.title} />
        <section className="py-14 md:py-24">
          <div className="site-shell">
            <Link href="/actualites" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#516171] hover:text-[#081a2c]"><ArrowLeft size={17} aria-hidden="true" /> Toutes les actualités</Link>
            <article className="rich-content max-w-3xl" dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
