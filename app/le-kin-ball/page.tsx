import type { Metadata } from 'next';
import { ArrowRight, Camera, CircleDot, Handshake, UsersRound } from 'lucide-react';
import { HardLink as Link } from '@/components/hard-link';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Le Kin-Ball',
  description: 'Comprendre le Kin-Ball : trois équipes, un ballon de 1,22 mètre et un jeu fondé sur la coopération.',
};

const keyFacts = [
  { value: '3', label: 'équipes en même temps' },
  { value: '4', label: 'joueurs par équipe' },
  { value: '1,22 m', label: 'de diamètre' },
  { value: '20 × 20 m', label: 'de terrain' },
];

export default function KinBallPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Découvrir le sport"
          title="Le Kin-Ball"
          intro="Un ballon géant, trois équipes et une règle essentielle : rien ne se gagne seul."
        />

        <section className="py-14 md:py-24">
          <div className="site-shell">
            <figure className="relative overflow-hidden bg-[#11152b]">
              <img
                src="/media/2022/03/274107382_10226317159378366_8414179501463258016_n.jpg"
                alt="Trois équipes de Kin-Ball en action autour d’un ballon noir"
                width="1944"
                height="1296"
                className="aspect-[16/9] w-full object-cover md:aspect-[2/1]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07070a]/90 to-transparent px-6 pb-5 pt-16 text-sm font-semibold text-white/85 md:px-9 md:pb-8">
                Sur un même terrain, chaque action engage les trois équipes.
              </figcaption>
            </figure>

            <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,760px)_320px] lg:justify-between">
              <article className="rich-content">
                <p className="kinball-lead">Le Kin-Ball bouleverse le duel classique des sports collectifs. Ici, trois équipes partagent le terrain et doivent lire le jeu en permanence : une équipe attaque, une autre est appelée à défendre, la troisième reste prête pour l’action suivante.</p>

                <h2>Le ballon change tout</h2>
                <p>Avec ses 1,22 mètre de diamètre, le ballon est spectaculaire sans être lourd. Sa taille oblige les joueurs à communiquer, se placer et agir ensemble. La puissance compte, mais elle ne remplace jamais la coordination.</p>
                <p>Sur le terrain, trois équipes de quatre joueurs portent des couleurs différentes. L’équipe en possession annonce la couleur de l’une de ses adversaires, puis frappe le ballon. L’équipe appelée doit l’empêcher de toucher le sol, avec n’importe quelle partie du corps.</p>

                <h2>Une action en trois temps</h2>
                <ol className="kinball-action-list">
                  <li><strong>Appeler.</strong> L’équipe qui attaque annonce clairement la couleur chargée de réceptionner.</li>
                  <li><strong>Frapper.</strong> Les quatre coéquipiers doivent toucher le ballon avant la frappe.</li>
                  <li><strong>Sauver et relancer.</strong> L’équipe appelée contrôle le ballon avant qu’il ne tombe, se replace, puis choisit à son tour qui devra défendre.</li>
                </ol>

                <figure>
                  <img
                    src="/media/2022/10/299830664_6097103276966357_6151208398957877790_n.jpg"
                    alt="Une équipe de Kin-Ball réceptionne un grand ballon blanc en compétition"
                    width="1092"
                    height="751"
                    loading="lazy"
                  />
                  <figcaption>Réception, observation, replacement : le jeu ne s’arrête qu’en cas de faute ou lorsque le ballon touche le sol.</figcaption>
                </figure>

                <h2>Comment marque-t-on ?</h2>
                <p>Si l’équipe appelée ne parvient pas à contrôler le ballon avant qu’il ne touche le sol, les deux autres équipes marquent un point. Le même principe s’applique lorsqu’une équipe commet une faute. Cette mécanique garde les trois camps concernés par chaque échange.</p>
                <p>Dans la formule fédérale actuelle, un match se joue en quatre périodes de 11 points. Le format peut être adapté pour les initiations et les catégories jeunes, sans perdre l’essentiel : appeler, frapper, sauver, puis reconstruire ensemble.</p>

                <h2>Un sport pensé pour coopérer</h2>
                <p>Le Kin-Ball a été créé au Québec en 1986 par l’éducateur sportif Mario Demers. Son idée était simple et ambitieuse : remettre chaque joueur au cœur de l’action. Parce que les quatre membres de l’équipe participent à la frappe, il devient difficile de gagner en laissant quelqu’un de côté.</p>
                <p>Le fair-play fait lui aussi partie du jeu. Les comportements antisportifs sont sanctionnés et la communication devient une compétence aussi importante que la vitesse ou la technique. C’est ce mélange qui rend le Kin-Ball à la fois sportif, stratégique et très convivial.</p>

                <figure>
                  <img
                    src="/media/2022/05/20220424_174335-scaled.jpg"
                    alt="Les joueuses et joueurs du Noisy Kin-Ball posent avec le ballon"
                    width="1244"
                    height="2560"
                    loading="lazy"
                    className="kinball-portrait-photo"
                  />
                  <figcaption>Au Noisy Kin-Ball, loisirs, progression et compétition se retrouvent autour du même ballon.</figcaption>
                </figure>

                <h2>Le meilleur moyen de comprendre ? Jouer.</h2>
                <p>Les premières minutes suffisent pour saisir les bases, mais le jeu révèle vite toute sa profondeur : placements, feintes, choix de l’équipe appelée, trajectoires et sauvetages parfois acrobatiques. Le club accueille les débutants lors de séances d’initiation à Noisy-le-Grand.</p>
                <p><a href="https://www.kin-ball.fr/le-sport-kin-ball/" target="_blank" rel="noreferrer">En savoir plus sur le sport auprès de la Fédération Kin-Ball France</a>.</p>
              </article>

              <aside className="space-y-6 lg:sticky lg:top-8 lg:h-fit">
                <div className="bg-[#7412b9] p-7 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#e2c9ff]">En un coup d’œil</p>
                  <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7">
                    {keyFacts.map((fact) => (
                      <div key={fact.label} className="border-t border-white/35 pt-3">
                        <dt className="font-serif text-2xl font-black leading-none">{fact.value}</dt>
                        <dd className="mt-2 text-sm leading-snug text-white/75">{fact.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="border-t-4 border-[#7412b9] bg-white p-7 shadow-[0_18px_60px_rgba(17,21,43,0.08)]">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#7412b9]">Ce qui compte</p>
                  <ul className="mt-6 space-y-5 text-sm font-bold text-[#343643]">
                    <li className="flex items-center gap-3"><Handshake className="text-[#7412b9]" size={22} aria-hidden="true" /> Coopération</li>
                    <li className="flex items-center gap-3"><UsersRound className="text-[#7412b9]" size={22} aria-hidden="true" /> Esprit d’équipe</li>
                    <li className="flex items-center gap-3"><CircleDot className="text-[#7412b9]" size={22} aria-hidden="true" /> Fair-play</li>
                  </ul>
                  <Link href="/initiation" className="mt-8 inline-flex items-center gap-2 font-extrabold text-[#11152b] underline decoration-[#7412b9] decoration-2 underline-offset-4">
                    Essayer le Kin-Ball <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-[#7412b9] py-14 text-white md:py-20">
          <div className="site-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-3xl gap-5">
              <Camera className="mt-1 shrink-0" size={36} strokeWidth={1.8} aria-hidden="true" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-white/65">Encore plus de Kin-Ball</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.02em] sm:text-4xl">Suis la fédération sur Instagram.</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-white/75">Compétitions, actualités et stories des différentes ligues : le compte fédéral montre le Kin-Ball partout en France.</p>
              </div>
            </div>
            <a href="https://www.instagram.com/ffkinball/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#7412b9] transition hover:bg-[#11152b] hover:text-white">
              Suivre @ffkinball <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
