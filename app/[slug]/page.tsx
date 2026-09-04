import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
  const page = getPage(slug);
  if (!page) notFound();

  return (
    <>
      <main>
        <PageHero eyebrow="Noisy Kin-Ball" title={page.title} intro={page.excerpt} />
        <section className="py-14 md:py-24">
          <div className="site-shell grid gap-12 lg:grid-cols-[minmax(0,760px)_280px] lg:justify-between">
            <article className="rich-content" dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
            <aside className="h-fit border-t-4 border-[#dfff45] bg-white p-6 shadow-[0_18px_60px_rgba(8,26,44,0.08)] lg:sticky lg:top-8">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#ff3f67]">Envie d’essayer ?</p>
              <p className="mt-4 text-xl font-extrabold leading-tight tracking-[-0.03em]">Découvre le Kin-Ball avec le club lors d’une séance d’initiation.</p>
              <Link href="/initiation" className="mt-6 inline-flex items-center gap-2 font-bold text-[#0d2b47] underline decoration-[#ff3f67] decoration-2 underline-offset-4">Voir les initiations <ArrowRight size={17} aria-hidden="true" /></Link>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
