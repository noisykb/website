import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';
import { getPage, pages } from '@/lib/content';

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  return page ? { title: page.title, description: page.excerpt } : {};
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'resultats') redirect('/actualites');
  if (slug === 'les-equipes') redirect('/le-club');
  if (slug === 'nous-rejoindre') redirect('/initiation');
  const page = getPage(slug);
  if (!page) notFound();

  return (
    <>
      <main>
        <PageHero eyebrow="Noisy Kin-Ball" title={page.title} intro={page.excerpt} />
        <section className="py-14 md:py-24">
          <div className="site-shell grid gap-12 lg:grid-cols-[minmax(0,760px)_280px] lg:justify-between">
            <article className="rich-content" dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
            <aside className="h-fit border-t-4 border-[#7412b9] bg-white p-6 shadow-[0_18px_60px_rgba(17,21,43,0.08)] lg:sticky lg:top-8">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7412b9]">Envie d’essayer ?</p>
              <p className="mt-4 text-xl font-extrabold leading-snug tracking-[-0.015em]">Découvre le Kin-Ball avec le club lors d’une séance d’initiation.</p>
              <Link href="/initiation" className="mt-6 inline-flex items-center gap-2 font-bold text-[#11152b] underline decoration-[#7412b9] decoration-2 underline-offset-4">Voir les initiations <ArrowRight size={17} aria-hidden="true" /></Link>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
