import rawContent from '@/content/wordpress-content.json';

export type ContentRecord = {
  id: number;
  type: 'page' | 'post';
  title: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  bodyHtml: string;
  legacyUrl: string;
  featuredMediaId: string | null;
};

const content = rawContent as ContentRecord[];

const pageFallbacks: Record<string, { excerpt: string; bodyHtml: string }> = {
  'noisy-kin-ball': {
    excerpt: 'Un club né à Noisy-le-Grand pour faire découvrir un sport collectif différent, exigeant et profondément coopératif.',
    bodyHtml: '<h2>Le Noisy Kin-Ball</h2><p>Créé en 2013 par deux passionnés de sport, Noisy Kin-Ball est le premier club francilien consacré à cette discipline. Débutants et joueurs confirmés s’y retrouvent autour d’une même envie : jouer ensemble, progresser et partager les valeurs du Kin-Ball.</p>',
  },
  'nous-contacter': {
    excerpt: 'Une question sur les entraînements, les initiations ou les inscriptions ? Écrivez-nous.',
    bodyHtml: '<h2>Parlons-nous</h2><p>Pour toute question, contactez le club à <a href="mailto:noisykb@gmail.com">noisykb@gmail.com</a>. Nous vous répondrons au plus vite.</p><h3>Venir au gymnase</h3><p>Gymnase Marcel Cerdan, rue Jules Ferry, 93160 Noisy-le-Grand.</p>',
  },
  'les-partenaires': {
    excerpt: 'Les structures qui accompagnent le club et contribuent à son développement.',
    bodyHtml: '<h2>Nos partenaires</h2><p>Le club remercie les partenaires qui rendent possibles les entraînements, compétitions et actions de découverte du Kin-Ball.</p><p><a href="https://www.sportamo.com/" target="_blank" rel="noreferrer">Découvrir Sportamo</a></p>',
  },
  resultats: {
    excerpt: 'Les parcours des équipes féminine et masculine du Noisy Kin-Ball dans leurs championnats.',
    bodyHtml: '<h2>Équipe féminine · championnat national</h2><p>Retrouvez le parcours des Kinuts et les comptes rendus de leurs journées de championnat dans les actualités du club.</p><h2>Équipe masculine · Ligue régionale Est</h2><p>Suivez les rencontres de l’équipe masculine à travers les comptes rendus publiés après les compétitions.</p>',
  },
};

export const pages = content
  .filter((item) => item.type === 'page' && item.slug !== 'accueil')
  .map((item) => ({ ...item, ...pageFallbacks[item.slug] }));

export const articles = content
  .filter((item) => item.type === 'post')
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getPage = (slug: string) => pages.find((item) => item.slug === slug);
export const getArticle = (slug: string) => articles.find((item) => item.slug === slug);

export function formatFrenchDate(value: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(value.replace(' ', 'T') + 'Z'));
}
