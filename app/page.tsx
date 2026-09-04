import { ArrowRight } from 'lucide-react';
import { HardLink as Link } from '@/components/hard-link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { articles, formatFrenchDate } from '@/lib/content';

const ruleSteps = [
  {
    number: '01',
    title: 'Appeler',
    description: 'L’équipe en attaque désigne la couleur qui devra réceptionner.',
    image: '/illustrations/kin-ball-appeler-v2.png',
    alt: 'Une arbitre siffle et pointe vers le ballon porté par un joueur',
  },
  {
    number: '02',
    title: 'Frapper',
    description: 'Les quatre joueurs doivent toucher la balle avant la frappe.',
    image: '/illustrations/kin-ball-frapper-v3.png',
    alt: 'Un joueur frappe le ballon pendant que trois coéquipiers le soutiennent',
  },
  {
    number: '03',
    title: 'Sauver',
    description: 'L’équipe appelée empêche le ballon de toucher le sol par tous les moyens.',
    image: '/illustrations/kin-ball-sauver-v3.png',
    alt: 'Un joueur en glissade maintient le ballon hors du sol avec son pied',
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-[#11152b] pt-20 text-white">
          <SiteHeader />
          <img
            src="/brand/noisy-kin-ball-team.webp"
            alt="Les joueuses et joueurs du Noisy Kin-Ball réunis autour du ballon"
            width="1440"
            height="754"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[57%_center]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,10,0.96)_0%,rgba(17,21,43,0.9)_38%,rgba(17,21,43,0.46)_70%,rgba(7,7,10,0.3)_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#11152b]/75 to-transparent" />
          <div aria-hidden="true" className="absolute -right-20 top-36 size-[28rem] rounded-full border-[4.5rem] border-[#7412b9]/70 mix-blend-screen md:right-[-4rem] md:size-[42rem] md:border-[6rem]" />
          <div className="site-shell relative z-10 grid min-h-[680px] items-end gap-12 pb-16 pt-24 lg:grid-cols-[1fr_320px] lg:pb-20">
            <div>
              <p className="eyebrow mb-7 text-[#cba6ff]">Noisy-le-Grand · depuis 2013</p>
              <h1 className="display-title hero-display-title max-w-5xl">Trois équipes.<br />Un ballon.<br />À toi de jouer.</h1>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/initiation" className="button-primary">Participer à une initiation <ArrowRight size={18} aria-hidden="true" /></Link>
                <Link href="/le-kin-ball" className="button-secondary">Découvrir le sport</Link>
              </div>
            </div>
            <aside className="border-l-4 border-[#8b2ad1] bg-[#07070a]/45 p-6 backdrop-blur-sm lg:mb-2" aria-label="Informations pratiques">
              <p className="max-w-xs text-lg font-semibold leading-snug text-white/90">Un sport collectif spectaculaire, accessible et fondé sur la coopération.</p>
              <dl className="mt-8 grid gap-5 text-sm">
                <div className="flex gap-4"><span aria-hidden="true" className="mt-1.5 size-3 shrink-0 bg-[#cba6ff] shadow-[5px_5px_0_rgba(116,18,185,0.65)]" /><div><dt className="text-sm font-extrabold uppercase tracking-[0.065em] text-white">Gymnase Marcel Cerdan</dt><dd className="mt-1 text-white/70">Lundi · 20h30–22h30</dd></div></div>
                <div className="flex gap-4"><span aria-hidden="true" className="mt-1.5 size-3 shrink-0 bg-[#cba6ff] shadow-[5px_5px_0_rgba(116,18,185,0.65)]" /><div><dt className="text-sm font-extrabold uppercase tracking-[0.065em] text-white">Gymnase Cabrini</dt><dd className="mt-1 text-white/70">Jeudi · 20h30–22h30<br />20 rue du Docteur Sureau</dd></div></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="site-shell">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
              <p className="eyebrow text-[#7412b9]">Les règles changent</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.025em] md:text-6xl">Ici, on joue à trois.</h2>
              </div>
              <div className="lg:pb-1">
              <p className="max-w-2xl text-lg leading-relaxed text-[#4d5161]">Trois équipes de quatre joueurs partagent le même terrain. Pour gagner, il faut observer, coopérer et garder l’énorme ballon en mouvement.</p>
              <Link href="/le-kin-ball" className="mt-8 inline-flex items-center gap-2 font-extrabold underline decoration-[#7412b9] decoration-2 underline-offset-4">Comprendre le Kin-Ball <ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
            </div>
            <ol className="mt-12 grid gap-4 md:grid-cols-3">
              {ruleSteps.map(({ number, title, description, image, alt }) => (
                <li key={number} className="group relative min-h-[360px] list-none overflow-hidden bg-[#11152b] md:min-h-[430px]">
                  <img
                    src={image}
                    alt={alt}
                    width="1200"
                    height="900"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,10,0.02)_25%,rgba(7,7,10,0.38)_58%,rgba(7,7,10,0.96)_100%)]" />
                  <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white/95 font-mono text-sm font-black text-[#7412b9] shadow-lg backdrop-blur-sm">{number}</span>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                    <h3 className="text-3xl font-black tracking-[-0.02em]">{title}</h3>
                    <p className="mt-3 max-w-sm text-base leading-relaxed text-white/85">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="site-shell">
            <div className="flex flex-col justify-between gap-6 border-b-2 border-[#09090d] pb-7 md:flex-row md:items-end">
              <div><p className="eyebrow text-[#7412b9]">Sur le terrain</p><h2 className="mt-4 text-4xl font-black tracking-[-0.025em] md:text-6xl">Les dernières nouvelles</h2></div>
              <Link href="/actualites" className="font-bold text-[#11152b] underline decoration-[#7412b9] decoration-2 underline-offset-4">Toutes les actualités</Link>
            </div>
            <div className="grid md:grid-cols-3">
              {articles.slice(0, 3).map((article) => (
                <article key={article.slug} className="group relative border-b border-[#c3c9cc] py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                  <div className="aspect-[4/3] overflow-hidden bg-[#11152b]">
                    <img src={article.featuredImage} alt="" width="800" height="600" loading="lazy" className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.035] ${article.slug === 'noisy-champion-regional-ligue-est' ? 'object-top' : article.slug === 'pauline-gade-bleues-bronze-europe-2026' ? 'object-[center_42%]' : 'object-center'}`} />
                  </div>
                  <p className="mt-6 font-mono text-xs font-bold text-[#7412b9]">{formatFrenchDate(article.publishedAt)}</p>
                  <h3 className="mt-4 text-2xl font-extrabold leading-snug tracking-[-0.015em]"><Link href={`/actualites/${article.slug}`} className="no-underline after:absolute after:inset-0">{article.title}</Link></h3>
                  <span className="mt-7 inline-flex size-10 items-center justify-center rounded-full border-2 border-[#09090d] transition-colors group-hover:bg-[#cba6ff]"><ArrowRight size={18} aria-hidden="true" /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#7412b9] py-16 text-white md:py-20">
          <div className="site-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div><p className="eyebrow">Première séance gratuite</p><h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.025em] md:text-6xl">Viens découvrir un sport pas comme les autres.</h2></div>
            <Link href="/initiation" className="button-secondary shrink-0">Je réserve ma séance <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
