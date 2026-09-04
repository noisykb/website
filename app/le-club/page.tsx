import type { Metadata } from 'next';
import { ArrowRight, Camera, MapPin } from 'lucide-react';
import { HardLink as Link } from '@/components/hard-link';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Le club',
  description: 'Noisy Kin-Ball : un club mixte et convivial, ouvert dès 16 ans, pour jouer en loisir ou en compétition.',
};

const trainingSessions = [
  {
    day: 'Lundi',
    time: '20h30–22h30',
    venue: 'Gymnase Marcel Cerdan',
    address: 'Rue Jules Ferry · Noisy-le-Grand',
  },
  {
    day: 'Jeudi',
    time: '20h30–22h30',
    venue: 'Gymnase Cabrini',
    address: '20 rue du Docteur Sureau · 93160 Noisy-le-Grand',
  },
];

export default function ClubPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Noisy-le-Grand · depuis 2013"
          title="Le club"
          intro="Un club mixte où l’on vient pour découvrir, progresser, jouer en loisir ou vivre la compétition — toujours ensemble."
        />

        <section className="py-14 md:py-24">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="eyebrow text-[#7412b9]">Premier club francilien</p>
                <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.025em] md:text-6xl">Du gros ballon à une vraie aventure collective.</h2>
                <p className="mt-7 text-lg leading-relaxed text-[#4d5161]">Créé en 2013 par deux passionnés de sport, le Noisy Kin-Ball a été le premier club d’Île-de-France consacré à cette discipline. Depuis, des joueuses et joueurs aux parcours très différents se retrouvent chaque semaine autour de la même envie : bouger, apprendre et prendre plaisir à jouer ensemble.</p>
              </div>
              <figure className="overflow-hidden bg-[#11152b]">
                <img
                  src="/brand/noisy-kin-ball-team.webp"
                  alt="Les joueuses et joueurs du Noisy Kin-Ball réunis dans leur gymnase"
                  width="1440"
                  height="754"
                  className="aspect-[4/3] w-full object-cover object-[56%_center]"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="site-shell">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#7412b9]">Ici, tout le monde joue</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.025em] md:text-6xl">Des entraînements mixtes, dès 16 ans.</h2>
              <p className="mt-7 text-lg leading-relaxed text-[#4d5161]">Il n’y a pas de groupe séparé entre femmes et hommes : les entraînements sont mixtes, comme la vie du club. Les séances accueillent les débutants comme les joueurs expérimentés, à partir de 16 ans.</p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-[#d9d5e0] bg-[#d9d5e0] md:grid-cols-2">
              <article className="bg-[#f7f6fb] p-7 md:p-10">
                <p className="font-mono text-sm font-black text-[#7412b9]">01</p>
                <h3 className="mt-8 text-3xl font-black tracking-[-0.02em]">Section loisirs</h3>
                <p className="mt-5 text-base leading-relaxed text-[#5e6474]">Accessible à tous les niveaux, elle permet de découvrir le Kin-Ball sans pression, de reprendre une activité sportive ou simplement de partager un bon moment. Aucun prérequis technique n’est nécessaire : les gestes et les règles s’apprennent progressivement.</p>
              </article>
              <article className="bg-[#11152b] p-7 text-white md:p-10">
                <p className="font-mono text-sm font-black text-[#cba6ff]">02</p>
                <h3 className="mt-8 text-3xl font-black tracking-[-0.02em]">Pôle compétition</h3>
                <p className="mt-5 text-base leading-relaxed text-white/70">Pour celles et ceux qui souhaitent aller plus loin, le club prépare ses équipes aux Opens régionaux et nationaux. Technique, stratégie et cohésion se travaillent dans le même esprit convivial, avec des objectifs adaptés à chaque groupe.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="site-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <figure className="overflow-hidden bg-[#11152b]">
              <img
                src="/media/2022/03/274107382_10226317159378366_8414179501463258016_n.jpg"
                alt="Trois équipes disputent un match de Kin-Ball"
                width="1944"
                height="1296"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div>
              <p className="eyebrow text-[#7412b9]">Du régional au national</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.025em] md:text-5xl">Noisy évoluera en D2 nationale.</h2>
              <p className="mt-7 text-lg leading-relaxed text-[#4d5161]">À l’issue des matchs de barrage disputés en mai 2026, l’équipe masculine de Noisy accède à la <strong className="text-[#11152b]">D2 nationale</strong>. Elle retrouvera de nouveaux adversaires lors des prochains Opens.</p>
              <p className="mt-5 text-lg leading-relaxed text-[#4d5161]">Le club rayonne aussi au-delà de ses équipes : avec Pauline Gadé, médaillée de bronze avec l’équipe de France féminine à la Coupe d’Europe 2026, et Simon Colatosti, sélectionneur adjoint des Bleues, Noisy est représenté jusque sur les terrains internationaux.</p>
              <div className="mt-8 flex flex-wrap gap-5">
                <Link href="/actualites/noisy-monte-en-d2-nationale" className="inline-flex items-center gap-2 font-extrabold text-[#11152b] underline decoration-[#7412b9] decoration-2 underline-offset-4">La montée en D2 <ArrowRight size={17} aria-hidden="true" /></Link>
                <Link href="/actualites/pauline-gade-bleues-bronze-europe-2026" className="inline-flex items-center gap-2 font-extrabold text-[#11152b] underline decoration-[#7412b9] decoration-2 underline-offset-4">Le bronze européen <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#7412b9] py-16 text-white md:py-20">
          <div className="site-shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[#e2c9ff]">Deux rendez-vous par semaine</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.025em] md:text-6xl">Viens jouer avec nous.</h2>
              </div>
              <Link href="/initiation" className="button-secondary shrink-0">Participer à une initiation <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden bg-white/25 md:grid-cols-2">
              {trainingSessions.map((session) => (
                <article key={session.day} className="bg-[#650da5] p-7 md:p-9">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 shrink-0 text-[#e2c9ff]" size={24} aria-hidden="true" />
                    <div>
                      <p className="font-mono text-sm font-black uppercase tracking-[0.08em] text-[#e2c9ff]">{session.day} · {session.time}</p>
                      <h3 className="mt-3 text-2xl font-black">{session.venue}</h3>
                      <p className="mt-2 text-white/70">{session.address}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">Les deux créneaux sont mixtes et ouverts à la section loisirs comme aux joueurs engagés en compétition. La première séance permet de découvrir le sport et de rencontrer le groupe.</p>
            <a href="https://www.instagram.com/noisy_kinball/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-extrabold text-white underline decoration-[#e2c9ff] decoration-2 underline-offset-4">
              <Camera size={19} aria-hidden="true" /> Suivre la vie du club sur Instagram
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
