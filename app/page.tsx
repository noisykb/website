import { ArrowRight, MapPin, Timer } from 'lucide-react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const news = [
  { date: '27.11.2022', title: 'Les hommes retrouvent la Ligue Est à Poitiers', href: '/actualites/hommes-1ere-journee-de-championnat-ligue-est-a-poitiers' },
  { date: '17.08.2022', title: 'Noisy à la Coupe du monde des Clubs en Tchéquie', href: '/actualites/noisy-a-la-coupe-du-monde-des-clubs-2022-en-tchequie' },
  { date: '23.05.2022', title: 'Dernière journée de championnat aux Ponts-de-Cé', href: '/actualites/7eme-journee-de-championnat-2021-2022-aux-ponts-de-ce' },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-[#0d2b47] pt-20 text-white">
          <SiteHeader />
          <div aria-hidden="true" className="absolute -right-32 top-28 size-[34rem] rounded-full border-[5rem] border-[#ff3f67]/90 md:right-[-6rem] md:size-[48rem] md:border-[7rem]" />
          <div aria-hidden="true" className="absolute right-[20%] top-[23%] size-24 rounded-full bg-[#dfff45] shadow-[0_0_80px_rgba(223,255,69,0.45)] md:size-36" />
          <div className="site-shell relative z-10 grid min-h-[680px] items-end gap-12 pb-16 pt-24 lg:grid-cols-[1fr_320px] lg:pb-20">
            <div>
              <p className="eyebrow mb-7 text-[#dfff45]">Noisy-le-Grand · depuis 2013</p>
              <h1 className="display-title max-w-5xl">Trois équipes.<br />Un ballon.<br />À toi de jouer.</h1>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/initiation" className="button-primary">Participer à une initiation <ArrowRight size={18} aria-hidden="true" /></Link>
                <Link href="/le-kin-ball" className="button-secondary">Découvrir le sport</Link>
              </div>
            </div>
            <aside className="border-l border-white/25 pl-6 lg:mb-2" aria-label="Informations pratiques">
              <p className="max-w-xs text-lg font-semibold leading-snug text-white/90">Un sport collectif spectaculaire, accessible et fondé sur la coopération.</p>
              <dl className="mt-8 grid gap-5 text-sm">
                <div className="flex gap-3"><Timer className="mt-0.5 text-[#dfff45]" size={19} aria-hidden="true" /><div><dt className="font-bold">Entraînement</dt><dd className="text-white/65">Lundi · 20h30–22h30</dd></div></div>
                <div className="flex gap-3"><MapPin className="mt-0.5 text-[#dfff45]" size={19} aria-hidden="true" /><div><dt className="font-bold">Gymnase Marcel Cerdan</dt><dd className="text-white/65">Noisy-le-Grand</dd></div></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="bg-[#dfff45] py-16 md:py-24">
          <div className="site-shell grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
            <div>
              <p className="eyebrow text-[#0d2b47]">Les règles changent</p>
              <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">Ici, on joue à trois.</h2>
              <p className="mt-6 max-w-md text-[#314355]">Trois équipes de quatre joueurs partagent le même terrain. Pour gagner, il faut observer, coopérer et garder l’énorme ballon en mouvement.</p>
              <Link href="/le-kin-ball" className="mt-8 inline-flex items-center gap-2 font-extrabold underline decoration-[#ff3f67] decoration-2 underline-offset-4">Comprendre le Kin-Ball <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
            <ol className="grid gap-px bg-[#8d9a56] sm:grid-cols-3">
              {[
                ['01', 'Appeler', 'L’équipe en attaque désigne la couleur qui devra réceptionner.'],
                ['02', 'Frapper', 'Les quatre joueurs participent avant que le ballon soit envoyé.'],
                ['03', 'Sauver', 'L’équipe appelée empêche le ballon de toucher le sol.'],
              ].map(([number, title, description]) => (
                <li key={number} className="min-h-64 list-none bg-[#dfff45] p-7 sm:min-h-80">
                  <span className="font-mono text-sm font-black text-[#ff3f67]">{number}</span>
                  <h3 className="mt-16 text-3xl font-black tracking-[-0.05em] sm:mt-28">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#405062]">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="site-shell">
            <div className="flex flex-col justify-between gap-6 border-b-2 border-[#081a2c] pb-7 md:flex-row md:items-end">
              <div><p className="eyebrow text-[#ff3f67]">Sur le terrain</p><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">Les dernières nouvelles</h2></div>
              <Link href="/actualites" className="font-bold text-[#0d2b47] underline decoration-[#ff3f67] decoration-2 underline-offset-4">Toutes les actualités</Link>
            </div>
            <div className="grid md:grid-cols-3">
              {news.map((item) => (
                <article key={item.href} className="group relative border-b border-[#c3c9cc] py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                  <p className="font-mono text-xs font-bold text-[#ff3f67]">{item.date}</p>
                  <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-[-0.035em]"><Link href={item.href} className="no-underline after:absolute after:inset-0">{item.title}</Link></h3>
                  <span className="mt-8 inline-flex size-10 items-center justify-center rounded-full border-2 border-[#081a2c] transition-colors group-hover:bg-[#dfff45]"><ArrowRight size={18} aria-hidden="true" /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ff3f67] py-16 text-white md:py-20">
          <div className="site-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div><p className="eyebrow">Première séance gratuite</p><h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">Viens découvrir un sport pas comme les autres.</h2></div>
            <Link href="/initiation" className="button-secondary shrink-0">Je réserve ma séance <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
