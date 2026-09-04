import type { Metadata } from 'next';
import { ArrowRight, Camera, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { HardLink as Link } from '@/components/hard-link';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Nous contacter',
  description: 'Contactez le Noisy Kin-Ball et retrouvez les lieux et horaires des entraînements à Noisy-le-Grand.',
};

const venues = [
  {
    day: 'Lundi',
    time: '20h30–22h30',
    name: 'Gymnase Marcel Cerdan',
    address: 'Rue Jules Ferry · 93160 Noisy-le-Grand',
  },
  {
    day: 'Jeudi',
    time: '20h30–22h30',
    name: 'Gymnase Cabrini',
    address: '20 rue du Docteur Sureau · 93160 Noisy-le-Grand',
  },
];

export default function ContactPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Une question ?"
          title="Nous contacter"
          intro="Initiation, entraînements, licence ou vie du club : écris-nous, on te répond simplement."
        />

        <section className="bg-[#f7f6fb] py-14 md:py-24">
          <div className="site-shell grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <article className="flex flex-col justify-between bg-[#11152b] p-7 text-white sm:p-10 lg:min-h-[540px]">
              <div>
                <p className="eyebrow text-[#cba6ff]">Le plus simple</p>
                <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.03em] sm:text-5xl">Parlons-nous.</h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">Dis-nous ce que tu cherches et si tu souhaites venir essayer. Une personne du club reviendra vers toi.</p>
              </div>
              <div className="mt-12 space-y-5">
                <a href="mailto:noisy.kb@gmail.com" className="group flex items-center gap-4 border-t border-white/20 pt-5 text-white no-underline">
                  <span className="grid size-11 shrink-0 place-items-center bg-[#7412b9]"><Mail size={21} aria-hidden="true" /></span>
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.1em] text-white/50">Courriel</span>
                    <span className="mt-1 block text-lg font-black group-hover:text-[#cba6ff]">noisy.kb@gmail.com</span>
                  </span>
                </a>
                <a href="tel:+33671708170" className="group flex items-center gap-4 border-t border-white/20 pt-5 text-white no-underline">
                  <span className="grid size-11 shrink-0 place-items-center bg-[#7412b9]"><Phone size={21} aria-hidden="true" /></span>
                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.1em] text-white/50">Téléphone</span>
                    <span className="mt-1 block text-lg font-black group-hover:text-[#cba6ff]">06 71 70 81 70</span>
                  </span>
                </a>
              </div>
            </article>

            <figure className="relative min-h-[420px] overflow-hidden bg-[#11152b] lg:min-h-[540px]">
              <img
                src="/brand/noisy-kin-ball-team.webp"
                alt="Les joueuses et joueurs du Noisy Kin-Ball réunis dans leur gymnase"
                width="1440"
                height="754"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#07070a]/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 text-lg font-black text-white sm:p-9">Une équipe mixte, conviviale et ouverte dès 16 ans.</figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="site-shell">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#7412b9]">Où nous trouver</p>
                <h2 className="mt-5 text-4xl font-black leading-[1.03] tracking-[-0.03em] sm:text-5xl">Deux soirs pour jouer.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-[#5f6473] lg:justify-self-end">Les entraînements du club sont mixtes et accueillent les sections loisirs et compétition. Les initiations ont lieu le lundi à Marcel Cerdan.</p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-[#d9d5e0] bg-[#d9d5e0] md:grid-cols-2">
              {venues.map((venue) => (
                <article key={venue.day} className="relative overflow-hidden bg-[#f7f6fb] p-7 md:p-9">
                  <MapPin className="text-[#7412b9]" size={27} aria-hidden="true" />
                  <p className="mt-8 font-mono text-sm font-black uppercase tracking-[0.09em] text-[#7412b9]">{venue.day} · {venue.time}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.015em]">{venue.name}</h3>
                  <p className="mt-3 leading-relaxed text-[#626776]">{venue.address}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-between gap-6 bg-[#eee9f4] p-7 sm:flex-row sm:items-center md:p-9">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-1 shrink-0 text-[#7412b9]" size={26} aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-black">Envie de nous rejoindre ?</h3>
                  <p className="mt-2 text-[#626776]">La première séance est gratuite et accessible à tous les niveaux.</p>
                </div>
              </div>
              <Link href="/initiation" className="inline-flex shrink-0 items-center gap-3 bg-[#11152b] px-6 py-4 text-sm font-black uppercase tracking-[0.07em] text-white no-underline transition hover:bg-[#7412b9]">
                Réserver une initiation <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#7412b9] py-14 text-white md:py-20">
          <div className="site-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-3xl gap-5">
              <Camera className="mt-1 shrink-0" size={36} strokeWidth={1.8} aria-hidden="true" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white/65">La vie du club</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-4xl">Retrouve-nous sur Instagram.</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-white/75">Entraînements, compétitions et moments d’équipe : suis le quotidien du Noisy Kin-Ball.</p>
              </div>
            </div>
            <a href="https://www.instagram.com/noisy_kinball/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#7412b9] no-underline transition hover:bg-[#11152b] hover:text-white">
              Suivre @noisy_kinball <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
