import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { HardLink as Link } from '@/components/hard-link';
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
          <div className="site-shell grid gap-px overflow-hidden border border-[#d9d5e0] bg-[#d9d5e0] md:grid-cols-2">
            {articles.map((article, index) => (
              <article key={article.slug} className="group relative overflow-hidden bg-[#f7f6fb] transition-colors hover:bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-[#11152b]">
                  <img src={article.featuredImage} alt="" width="1200" height="675" loading="lazy" className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.035] ${article.slug === 'noisy-champion-regional-ligue-est' ? 'object-top' : article.slug === 'pauline-gade-bleues-bronze-europe-2026' ? 'object-[center_42%]' : 'object-center'}`} />
                </div>
                <div className="p-7 md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#7412b9]">{formatFrenchDate(article.publishedAt)}</p>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-[#09090d] transition-colors group-hover:bg-[#cba6ff]"><ArrowUpRight size={18} aria-hidden="true" /></span>
                  </div>
                  <p className="mt-8 text-xs font-black uppercase tracking-[0.12em] text-[#6a6d7b]">Actualité {String(articles.length - index).padStart(2, '0')}</p>
                  <h2 className="mt-3 max-w-xl text-2xl font-black leading-snug tracking-[-0.02em] md:text-3xl">
                    <Link href={`/actualites/${article.slug}`} className="no-underline after:absolute after:inset-0">{article.title}</Link>
                  </h2>
                  {article.excerpt ? <p className="mt-4 line-clamp-2 text-base leading-relaxed text-[#5e6474]">{article.excerpt}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
