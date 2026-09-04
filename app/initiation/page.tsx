import type { Metadata } from 'next';
import { ArrowDown, ArrowUpRight, Check, MapPin, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const formUrl = 'https://form.jotform.com/232413762153349';

export const metadata: Metadata = {
  title: 'Participer à une initiation',
  description: 'Inscrivez-vous à une séance d’initiation mixte au Kin-Ball à Noisy-le-Grand, dès 16 ans et quel que soit votre niveau.',
};

const sessions = [
  { day: 'Lundi', time: '20h30–22h30', venue: 'Gymnase Marcel Cerdan', address: 'Rue Jules Ferry · Noisy-le-Grand' },
];

const essentials = [
  { icon: Sparkles, number: '01', title: 'Essai gratuit', text: 'Découvre le jeu, le ballon et le groupe sans engagement.' },
  { icon: UsersRound, number: '02', title: 'Vraiment mixte', text: 'Femmes et hommes, débutants et confirmés jouent ensemble dès 16 ans.' },
  { icon: ShieldCheck, number: '03', title: 'À mettre dans ton sac', text: 'Tenue confortable, eau et chaussures propres réservées à la salle.' },
];

export default function InitiationPage() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden bg-[#11152b] pt-20 text-white">
          <SiteHeader />
          <div aria-hidden="true" className="absolute -left-32 top-28 h-80 w-80 rounded-full bg-[#7412b9]/35 blur-[110px]" />
          <div aria-hidden="true" className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-[radial-gradient(circle_at_bottom_right,rgba(116,18,185,0.28),transparent_62%)]" />

          <div className="site-shell relative grid min-h-[700px] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:py-20">
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow text-[#d9b8ff]">Première séance gratuite</p>
              <h1 className="mt-7 text-6xl font-black leading-[0.91] tracking-[-0.045em] sm:text-7xl xl:text-[6.6rem]">
                Entre dans <span className="block text-[#cba6ff]">le jeu.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-[1.75] text-white/75 sm:text-xl">
                Un sport spectaculaire, une équipe accueillante et aucune expérience requise. Viens découvrir le Kin-Ball à Noisy-le-Grand.
              </p>
              <ul className="mt-8 flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.06em]">
                {['Tous niveaux', 'Mixte', 'Dès 16 ans'].map((label) => (
                  <li key={label} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <Check size={15} className="text-[#cba6ff]" aria-hidden="true" /> {label}
                  </li>
                ))}
              </ul>
              <a href="#formulaire" className="mt-10 inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#11152b] transition hover:bg-[#cba6ff]">
                Je réserve ma séance <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-[590px] pb-14 sm:pb-10">
              <div aria-hidden="true" className="absolute -right-5 -top-5 h-[82%] w-[80%] bg-[#7412b9] sm:-right-8 sm:-top-8" />
              <div aria-hidden="true" className="absolute -bottom-2 -left-6 h-40 w-40 border-[18px] border-[#cba6ff]/35 sm:-left-10" />
              <figure className="relative ml-auto w-[78%] rotate-[2deg] overflow-hidden border-[10px] border-white bg-white shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:w-[72%]">
                <img src="/brand/initiation-federation.jpg" alt="Affiche d’initiation au Kin-Ball au gymnase Marcel Cerdan" width="1080" height="1441" fetchPriority="high" className="h-auto w-full" />
              </figure>
              <div className="absolute bottom-0 left-0 max-w-[300px] border-l-4 border-[#7412b9] bg-white p-5 text-[#11152b] shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.13em] text-[#7412b9]">Chaque semaine</p>
                <p className="mt-2 text-2xl font-black leading-tight">Lundi · 20h30–22h30</p>
                <p className="mt-1 text-sm font-bold text-[#666b7a]">Gymnase Marcel Cerdan</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="site-shell">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#7412b9]">Ta première séance</p>
                <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.03em] sm:text-5xl">Viens, on s’occupe du reste.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-[#646978] lg:justify-self-end">
                Tu découvriras les gestes, les règles et surtout le plaisir de jouer à trois équipes autour de l’immense ballon.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden border border-[#d9d5e0] bg-[#d9d5e0] md:grid-cols-3">
              {essentials.map(({ icon: Icon, number, title, text }) => (
                <article key={title} className="group bg-[#f7f6fb] p-7 transition-colors hover:bg-[#f1ebf8] md:min-h-[285px] md:p-9">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-sm font-black text-[#7412b9]">{number}</span>
                    <Icon size={28} strokeWidth={1.8} className="text-[#7412b9]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-16 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-relaxed text-[#626776]">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-4">
              {sessions.map((session) => (
                <article key={session.day} className="relative overflow-hidden bg-[#11152b] p-7 text-white md:p-9">
                  <div aria-hidden="true" className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[28px] border-[#7412b9]/50" />
                  <MapPin className="relative text-[#cba6ff]" size={25} aria-hidden="true" />
                  <p className="relative mt-8 font-mono text-sm font-black uppercase tracking-[0.1em] text-[#cba6ff]">{session.day} · {session.time}</p>
                  <h3 className="relative mt-3 text-2xl font-black">{session.venue}</h3>
                  <p className="relative mt-2 text-sm text-white/60">{session.address}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="formulaire" className="scroll-mt-20 bg-[#eee9f4] py-16 md:py-24">
          <div className="site-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-[#7412b9]">Inscription</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.04] tracking-[-0.03em] sm:text-5xl">À toi de jouer.</h2>
              <p className="mt-6 text-lg leading-relaxed text-[#5f6473]">Choisis une date dans le formulaire. On te recontacte pour confirmer la séance et répondre à tes questions.</p>
              <div className="mt-8 border-l-4 border-[#7412b9] bg-white p-5 shadow-[0_12px_35px_rgba(17,21,43,0.07)]">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-0.5 shrink-0 text-[#7412b9]" size={25} aria-hidden="true" />
                  <div>
                    <h3 className="font-black">Le détail qui compte</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#646978]">Pense à apporter des chaussures propres réservées à la salle. Les genouillères sont conseillées, mais pas obligatoires.</p>
                  </div>
                </div>
              </div>
              <a href={formUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#11152b] underline decoration-[#7412b9] decoration-2 underline-offset-4">
                Ouvrir le formulaire séparément <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="overflow-hidden border border-[#d7d1dc] bg-white shadow-[0_24px_70px_rgba(17,21,43,0.12)]">
              <div className="flex items-center justify-between border-b border-[#e4e0e7] px-5 py-4 sm:px-7">
                <p className="text-sm font-black uppercase tracking-[0.08em] text-[#11152b]">Réserver une initiation</p>
                <span className="h-3 w-3 rounded-full bg-[#7412b9]" aria-hidden="true" />
              </div>
              <iframe title="Formulaire d’inscription à une initiation au Noisy Kin-Ball" src={formUrl} width="100%" height="960" loading="eager" className="block w-full border-0" />
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
