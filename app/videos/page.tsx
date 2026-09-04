import type { Metadata } from 'next';
import { Play } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Vidéos',
  description: 'Retrouvez les matchs et temps forts du Noisy Kin-Ball en vidéo.',
};

const europeanCupVideos = [
  {
    id: '_kZlYvwnjNU',
    title: 'Finale Europe femmes',
    detail: 'Tchéquie · France · Belgique',
  },
  {
    id: 'd95reidwIWk',
    title: 'Europe hommes · phase de groupes',
    detail: 'France · Espagne · Hongrie',
  },
  {
    id: 'GJl8KMLykg4',
    title: 'Europe hommes · match de classement',
    detail: 'Allemagne · France · Hongrie',
  },
  {
    id: 'DpO7u7OCNto',
    title: 'Ponts-de-Cé à l’Open Pro',
    detail: 'Les Fous du Bus · AAEEC Ponts-de-Cé 2 · TSG Dissen',
  },
];

const clubVideos = [
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
        <PageHero eyebrow="À revoir" title="Vidéos" intro="La Coupe d’Europe 2026, les tournois internationaux et toute l’énergie du Kin-Ball en match." />
        <section className="bg-white py-14 md:py-20">
          <div className="site-shell grid items-center gap-8 lg:grid-cols-[0.48fr_1fr] lg:gap-12">
            <div>
              <p className="eyebrow text-[#7412b9]">Bleu, blanc, rouge</p>
              <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-[-0.025em] md:text-5xl">Les équipes de France</h2>
              <p className="mt-5 text-lg leading-relaxed text-[#4d5161]">Les sélections nationales féminine et masculine réunies autour du ballon.</p>
            </div>
            <figure className="overflow-hidden bg-[#11152b]">
              <img
                src="/news/equipes-france-kin-ball.png"
                alt="Les sélections françaises féminine et masculine de Kin-Ball réunies"
                width="1890"
                height="1260"
                fetchPriority="high"
                className="aspect-[3/2] h-full w-full object-cover object-center"
              />
            </figure>
          </div>
        </section>
        <section id="coupe-europe-2026" className="scroll-mt-8 bg-[#f7f6fb] py-14 md:py-24">
          <div className="site-shell">
            <div className="flex flex-col justify-between gap-6 border-b-2 border-[#09090d] pb-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[#7412b9]">Erfurt · 2026</p>
                <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.025em] md:text-6xl">La Coupe d’Europe en première ligne</h2>
              </div>
              <a href="https://www.youtube.com/@Kin-BallEuro2026" target="_blank" rel="noreferrer" className="shrink-0 font-bold text-[#11152b] underline decoration-[#7412b9] decoration-2 underline-offset-4">Voir la chaîne officielle ↗</a>
            </div>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#4d5161]">Revivez les rencontres marquantes des sélections françaises et retrouvez Ponts-de-Cé dans l’International Open Pro.</p>
            <div className="mt-10 grid gap-7 md:grid-cols-2">
              {europeanCupVideos.map((video, index) => (
                <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" aria-label={`${video.title} — regarder sur YouTube`} className="group overflow-hidden bg-[#11152b] text-white no-underline">
                  <div className="relative aspect-video overflow-hidden bg-[#07070a]">
                    <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" width="480" height="360" loading={index < 2 ? 'eager' : 'lazy'} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-95" />
                    <span className="absolute left-5 top-5 bg-[#7412b9] px-3 py-1.5 font-mono text-xs font-black uppercase tracking-[0.08em]">Coupe d’Europe</span>
                    <span className="absolute inset-0 grid place-items-center"><span className="grid size-16 place-items-center rounded-full bg-white text-[#7412b9] shadow-xl transition-transform group-hover:scale-110"><Play size={25} fill="currentColor" aria-hidden="true" /></span></span>
                  </div>
                  <div className="p-6 md:p-7">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#cba6ff]">{video.detail}</p>
                    <h3 className="mt-3 text-2xl font-extrabold leading-snug tracking-[-0.015em]">{video.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-24">
          <div className="site-shell grid gap-7 md:grid-cols-2">
            <div className="md:col-span-2">
              <p className="eyebrow text-[#7412b9]">Archives du club</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.02em] md:text-5xl">Noisy en images</h2>
            </div>
            {clubVideos.map((video) => (
              <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" aria-label={`${video.title} — regarder sur YouTube`} className="group overflow-hidden bg-[#11152b] text-white no-underline">
                <div className="relative aspect-video overflow-hidden bg-[#07070a]">
                  <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" width="480" height="360" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
                  <span className="absolute inset-0 grid place-items-center"><span className="grid size-16 place-items-center rounded-full bg-[#7412b9] text-white transition-transform group-hover:scale-110"><Play size={25} fill="currentColor" aria-hidden="true" /></span></span>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <h2 className="text-xl font-extrabold leading-snug tracking-[-0.015em]">{video.title}</h2>
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
