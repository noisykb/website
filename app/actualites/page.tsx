import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';
import { articles, formatFrenchDate } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Les compétitions, rendez-vous et nouvelles du Noisy Kin-Ball.',
};

export default function NewsPage() {
  return (
    <>
      <main>
        <PageHero eyebrow="La vie du club" title="Actualités" intro="Compétitions, déplacements et moments forts du Noisy Kin-Ball." />
        <section className="py-14 md:py-24">
          <div className="site-shell grid gap-px overflow-hidden border border-[#cfd4d7] bg-[#cfd4d7] md:grid-cols-2">
            {articles.map((article, index) => (
              <article key={article.slug} className="group relative min-h-72 bg-[#f4f3ef] p-7 transition-colors hover:bg-white md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#ff3f67]">{formatFrenchDate(article.publishedAt)}</p>
                  <span className="grid size-10 place-items-center rounded-full border-2 border-[#081a2c] transition-colors group-hover:bg-[#dfff45]"><ArrowUpRight size={18} aria-hidden="true" /></span>
                </div>
                <p className="mt-12 text-xs font-black uppercase tracking-[0.12em] text-[#667583]">Match {String(articles.length - index).padStart(2, '0')}</p>
                <h2 className="mt-3 max-w-xl text-2xl font-black leading-tight tracking-[-0.04em] md:text-3xl">
                  <Link href={`/actualites/${article.slug}`} className="no-underline after:absolute after:inset-0">{article.title}</Link>
                </h2>
                {article.excerpt ? <p className="mt-4 line-clamp-2 text-sm text-[#516171]">{article.excerpt}</p> : null}
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
