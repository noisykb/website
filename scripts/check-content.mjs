import { readFile } from 'node:fs/promises';

const records = JSON.parse(await readFile(new URL('../content/wordpress-content.json', import.meta.url), 'utf8'));
const media = JSON.parse(await readFile(new URL('../content/media-manifest.json', import.meta.url), 'utf8'));
const requiredPages = [
  'accueil',
  'le-club',
  'les-equipes',
  'le-kin-ball',
  'resultats',
  'initiation',
  'nous-rejoindre',
  'les-partenaires',
  'le-bureau',
  'nous-contacter',
  'videos',
  'mentions-legales',
  'politique-de-confidentialite',
];

if (records.length !== 24) throw new Error(`Expected 24 published records, found ${records.length}`);
if (media.length !== 167) throw new Error(`Expected 167 media records, found ${media.length}`);

for (const type of ['page', 'post']) {
  const slugs = records.filter((record) => record.type === type).map((record) => record.slug);
  if (new Set(slugs).size !== slugs.length) throw new Error(`Duplicate ${type} slug detected`);
}

for (const slug of requiredPages) {
  if (!records.some((record) => record.type === 'page' && record.slug === slug)) {
    throw new Error(`Missing required page: ${slug}`);
  }
}

console.log(`Content valid: ${records.length} published records, ${media.length} media references`);
