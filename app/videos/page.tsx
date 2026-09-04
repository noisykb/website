import type { Metadata } from 'next';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Vidéos',
  description: 'Retrouvez les matchs et temps forts du Noisy Kin-Ball en vidéo.',
};

const videos = [
  { id: 'NFqlq_Hy0YA', title: 'Noisy-le-Grand · championnat national féminin' },
  { id: 'GvX02WEv4lg', title: 'Les Kinuts sur le terrain' },
  { id: '28mPpQKgMnI', title: 'Championnat de France de Kin-Ball' },
  { id: 'EWX9XL3ZZmA', title: 'Noisy Kin-Ball en compétition' },
  { id: 'FXiNKvBfrZs', title: 'Une journée avec le club' },
  { id: 'spXt9Uio68c', title: 'Match de l’équipe féminine' },
];

export default function VideosPage() {
  return (
    <>
      <main>
        <PageHero eyebrow="À revoir" title="Vidéos" intro="Des matchs, des échanges et toute l’énergie du Kin-Ball en images." />
        <section className="py-14 md:py-24">
          <div className="site-shell grid gap-7 md:grid-cols-2">
            {videos.map((video) => (
              <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" aria-label={`${video.title} — regarder sur YouTube`} className="group overflow-hidden bg-[#0d2b47] text-white no-underline">
                <div className="relative aspect-video overflow-hidden bg-[#061522]">
                  <Image src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
                  <span className="absolute inset-0 grid place-items-center"><span className="grid size-16 place-items-center rounded-full bg-[#dfff45] text-[#081a2c] transition-transform group-hover:scale-110"><Play size={25} fill="currentColor" aria-hidden="true" /></span></span>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <h2 className="text-xl font-extrabold leading-tight tracking-[-0.03em]">{video.title}</h2>
                  <span className="font-mono text-xs text-white/50">YouTube ↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
