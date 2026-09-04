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

const manualArticles: ContentRecord[] = [
  {
    id: -2,
    type: 'post',
    title: 'Noisy monte en D2 nationale',
    slug: 'noisy-monte-en-d2-nationale',
    publishedAt: '2026-09-01 08:00:00',
    updatedAt: '2026-09-01 08:00:00',
    excerpt: 'Championne régionale de la Ligue Est, l’équipe masculine de Noisy rejoint la D2 et découvrira le championnat national.',
    bodyHtml: `<p>Une nouvelle étape s’ouvre pour le Noisy Kin-Ball : après son titre régional en Ligue Est, l’équipe masculine accède à la catégorie supérieure et évoluera désormais en <strong>deuxième division nationale</strong>.</p>
<figure><img src="/news/noisy-d2-nationale-2026.png" alt="L’équipe masculine de Noisy réunie autour du ballon lors d’une compétition à Nantes" width="1539" height="1022" loading="lazy"></figure>
<h2>Le championnat national</h2>
<p>Le premier Championnat de France s’est tenu en 2006. Les équipes participantes venaient alors principalement de l’ouest de la France et la compétition, organisée en catégories masculine et féminine, a été dominée par Angers jusqu’en 2009.</p>
<p>Avec la croissance du nombre de clubs, le championnat a compté jusqu’à quatre divisions masculines et deux divisions féminines. La création des ligues régionales a ensuite permis de structurer deux divisions masculines et une division féminine de six équipes chacune, avec dix journées de six matchs au cours de la saison nationale.</p>
<p>Depuis la saison 2021-2022, les équipes masculines évoluent sous forme d’Opens, sur le modèle des ligues régionales. Une division féminine nationale a également vu le jour lors de la saison 2022-2023.</p>
<p>Pour Noisy, cette accession marque l’entrée dans une compétition plus relevée, avec de nouveaux adversaires, davantage de déplacements et le même objectif : faire grandir le collectif à chaque Open.</p>`,
    legacyUrl: '/actualites/noisy-monte-en-d2-nationale',
    featuredMediaId: null,
  },
  {
    id: -3,
    type: 'post',
    title: 'Pauline Gadé et les Bleues troisièmes d’Europe',
    slug: 'pauline-gade-bleues-bronze-europe-2026',
    publishedAt: '2026-08-29 19:00:00',
    updatedAt: '2026-08-29 19:00:00',
    excerpt: 'Avec la Noiséenne Pauline Gadé dans ses rangs, l’équipe de France féminine décroche la troisième place de la Coupe d’Europe 2026 à Erfurt.',
    bodyHtml: `<p>Les Bleues terminent leur semaine européenne sur le podium. Ce samedi 29 août, l’équipe de France féminine a pris la <strong>troisième place de la Coupe d’Europe de Kin-Ball 2026</strong>, organisée à Erfurt, en Allemagne.</p>
<figure class="portrait-news-figure"><img src="/news/equipe-france-feminine-kin-ball-2026-v2.png" alt="Les sélections françaises de Kin-Ball réunies autour du ballon noir" width="945" height="1663" loading="lazy"></figure>
<h2>Une Noiséenne sur le podium européen</h2>
<p>Le Noisy Kin-Ball est particulièrement fier de compter <strong>Pauline Gadé</strong> parmi les joueuses de cette équipe de France. Cette médaille récompense une semaine exigeante, face aux meilleures sélections du continent, et tout le travail accompli en club comme en sélection.</p>
<p>Le club était aussi représenté dans le staff tricolore par <strong>Simon Colatosti</strong>, sélectionneur adjoint de l’équipe de France féminine.</p>
<p>La compétition s’est déroulée du 25 au 29 août 2026 à la Riethsporthalle d’Erfurt. Après les rencontres de poule et la phase finale, la sélection féminine française repart avec le bronze.</p>
<h2>Bravo les Bleues</h2>
<p>Félicitations à Pauline, à ses coéquipières et à l’ensemble du staff tricolore pour ce beau résultat. Toute la famille du Noisy Kin-Ball partage cette fierté et a hâte de retrouver Pauline sur les terrains.</p>
<p><a href="/videos#coupe-europe-2026">Revoir les Bleues et les temps forts de la Coupe d’Europe en vidéo</a>.</p>
<p><a href="https://kinball-euro2026.de/" target="_blank" rel="noreferrer">Retrouver le site officiel de la Coupe d’Europe 2026</a>.</p>`,
    legacyUrl: '/actualites/pauline-gade-bleues-bronze-europe-2026',
    featuredMediaId: null,
  },
  {
    id: -1,
    type: 'post',
    title: 'L’équipe masculine de Noisy est championne régionale',
    slug: 'noisy-champion-regional-ligue-est',
    publishedAt: '2026-05-24 18:00:00',
    updatedAt: '2026-05-24 18:00:00',
    excerpt: 'Noisy 1 termine en tête du championnat régional masculin de la Ligue Est avec 82 points.',
    bodyHtml: `<p>Au terme de la rencontre du dimanche 24 mai, l’équipe masculine de Noisy Kin-Ball devient <strong>championne régionale de la Ligue Est</strong>.</p>
<figure><img src="/news/noisy-champion-ligue-est-2026.png" alt="Classement final du championnat régional masculin de la Ligue Est avec Noisy en première position" width="1080" height="1920" loading="lazy"></figure>
<h2>Noisy termine la saison en tête</h2>
<p>Avec 82 points au classement général, Noisy 1 devance Bassens 1 et Maubeuge 2. Cette première place vient récompenser toute une saison de régularité, de travail collectif et d’engagement.</p>
<p>Bravo aux joueurs, au staff et à toutes les personnes qui ont accompagné l’équipe durant cette aventure régionale.</p>`,
    legacyUrl: '/actualites/noisy-champion-regional-ligue-est',
    featuredMediaId: null,
  },
];

const articleCoverBySlug: Record<string, string> = {
  'noisy-monte-en-d2-nationale': '/news/noisy-d2-nationale-2026.png',
  'pauline-gade-bleues-bronze-europe-2026': '/news/equipe-france-feminine-kin-ball-2026-v2.png',
  'noisy-champion-regional-ligue-est': '/news/noisy-champion-ligue-est-2026.png',
  'premiere-et-derniere-journee-de-championnat': '/media/2021/01/Photo-Derniere-journee.jpeg',
  'fermeture-des-gymnases': '/media/2021/01/fermeture-gymnase.jpg',
  'rentree-2021': '/media/2021/08/Photo-Accueil-Le-sport2-scaled.jpg',
  'deuxieme-journee-de-championnat-2021-2022-paris': '/media/2022/01/272276941_5052497904794814_4135951533375553535_n.jpg',
  '3eme-journee-de-championnat-2021-2022-au-mans': '/media/2022/01/WhatsApp-Image-2022-01-16-at-19.45.15.jpeg',
  '4eme-journee-de-championnat-2021-2022-a-tours': '/media/2022/03/274107382_10226317159378366_8414179501463258016_n.jpg',
  '6eme-journee-de-championnat-2021-2022-a-saint-sylvain': '/media/2022/05/279646962_180734020968171_8188602694964091007_n-1.jpg',
  '7eme-journee-de-championnat-2021-2022-aux-ponts-de-ce': '/media/2022/05/20220522_174240-scaled.jpg',
  'noisy-a-la-coupe-du-monde-des-clubs-2022-en-tchequie': '/media/2022/08/296070931_540003217920872_1227293674388633093_n.jpg',
  'hommes-1ere-journee-de-championnat-ligue-est-a-poitiers': '/media/2022/11/image.png',
};

const pageFallbacks: Record<string, { excerpt: string; bodyHtml: string }> = {
  'noisy-kin-ball': {
    excerpt: 'Un club né à Noisy-le-Grand pour faire découvrir un sport collectif différent, exigeant et profondément coopératif.',
    bodyHtml: '<h2>Le Noisy Kin-Ball</h2><p>Créé en 2013 par deux passionnés de sport, Noisy Kin-Ball est le premier club francilien consacré à cette discipline. Débutants et joueurs confirmés s’y retrouvent autour d’une même envie : jouer ensemble, progresser et partager les valeurs du Kin-Ball.</p>',
  },
  'nous-contacter': {
    excerpt: 'Une question sur les entraînements, les initiations ou les inscriptions ? Écrivez-nous.',
    bodyHtml: '<h2>Parlons-nous</h2><p>Pour toute question, contactez le club à <a href="mailto:noisykb@gmail.com">noisykb@gmail.com</a>. Nous vous répondrons au plus vite.</p><h3>Venir aux entraînements</h3><p><strong>Le lundi, de 20h30 à 22h30</strong><br>Gymnase Marcel Cerdan, rue Jules Ferry, 93160 Noisy-le-Grand.</p><p><strong>Le jeudi, de 20h30 à 22h30</strong><br>Gymnase Cabrini, 20 rue du Docteur Sureau, 93160 Noisy-le-Grand.</p>',
  },
  'les-partenaires': {
    excerpt: 'Les structures qui accompagnent le club et contribuent à son développement.',
    bodyHtml: '<h2>Nos partenaires</h2><p>Le club remercie les partenaires qui rendent possibles les entraînements, compétitions et actions de découverte du Kin-Ball.</p><p><a href="https://www.sportamo.com/" target="_blank" rel="noreferrer">Découvrir Sportamo</a></p>',
  },
  'mentions-legales': {
    excerpt: 'Informations légales relatives au site officiel du Noisy Kin-Ball.',
    bodyHtml: `<h2>Éditeur du site</h2>
<p>Le site <a href="https://noisykinball.com">noisykinball.com</a> est édité par l’association <strong>Noisy Kin-Ball</strong>, déclarée auprès de la préfecture de la Seine-Saint-Denis sous le numéro RNA <strong>W932004671</strong>.</p>
<p><strong>Siège social :</strong><br>18 rue de Malnoue<br>93160 Noisy-le-Grand<br>France</p>
<p>L’association est représentée par Michael Domingues-Dias.</p>

<h2>Direction de la publication</h2>
<p>Le directeur de la publication est Michael Domingues-Dias, en qualité de représentant de l’association Noisy Kin-Ball.</p>

<h2>Hébergement</h2>
<p>Le site est hébergé sur l’infrastructure de <strong>Cloudflare, Inc.</strong>, 101 Townsend Street, San Francisco, California 94107, États-Unis.</p>
<p><a href="https://www.cloudflare.com/" target="_blank" rel="noreferrer">www.cloudflare.com</a></p>

<h2>Nous contacter</h2>
<p><strong>Par téléphone :</strong> <a href="tel:+33671708170">06 71 70 81 70</a><br>
<strong>Par courriel :</strong> <a href="mailto:noisy.kb@gmail.com">noisy.kb@gmail.com</a><br>
<strong>Par courrier :</strong> 18 rue de Malnoue, 93160 Noisy-le-Grand</p>

<h2>Données personnelles</h2>
<p>Les informations transmises au moyen du formulaire d’inscription sont utilisées uniquement pour traiter les demandes d’initiation, répondre aux personnes intéressées et organiser leur accueil au club. Elles sont destinées aux responsables habilités du Noisy Kin-Ball et ne sont conservées que pendant la durée nécessaire au traitement de la demande.</p>
<p>Conformément au Règlement général sur la protection des données, vous pouvez demander l’accès, la rectification ou l’effacement de vos données, ainsi que la limitation ou l’opposition à leur traitement, en écrivant à <a href="mailto:noisy.kb@gmail.com">noisy.kb@gmail.com</a>.</p>

<h2>Services externes</h2>
<p>Le site peut afficher des contenus ou formulaires fournis par des services tiers, notamment Jotform et YouTube. Ces services appliquent leurs propres politiques de confidentialité et peuvent utiliser des traceurs selon leurs modalités et vos choix.</p>

<h2>Propriété intellectuelle</h2>
<p>Sauf mention contraire, les textes, éléments graphiques et contenus publiés sur ce site appartiennent au Noisy Kin-Ball ou sont utilisés avec l’autorisation de leurs auteurs. Toute reproduction ou réutilisation substantielle nécessite une autorisation préalable.</p>

<p><em>Dernière mise à jour : 4 septembre 2026.</em></p>`,
  },
  resultats: {
    excerpt: 'Les parcours des équipes féminine et masculine du Noisy Kin-Ball dans leurs championnats.',
    bodyHtml: '<h2>Équipe féminine · championnat national</h2><p>Retrouvez le parcours des Kinuts et les comptes rendus de leurs journées de championnat dans les actualités du club.</p><h2>Équipe masculine · Ligue régionale Est</h2><p>Suivez les rencontres de l’équipe masculine à travers les comptes rendus publiés après les compétitions.</p>',
  },
};

export const pages = content
  .filter((item) => item.type === 'page' && !['accueil', 'les-equipes'].includes(item.slug))
  .map((item) => ({ ...item, ...pageFallbacks[item.slug] }));

export const articles = content
  .filter((item) => item.type === 'post')
  .concat(manualArticles)
  .map((item) => ({ ...item, featuredImage: articleCoverBySlug[item.slug] }))
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getPage = (slug: string) => pages.find((item) => item.slug === slug);
export const getArticle = (slug: string) => articles.find((item) => item.slug === slug);

export function formatFrenchDate(value: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(value.replace(' ', 'T') + 'Z'));
}
