import type { NextConfig } from 'next';

const legacyArticles = [
  ['2020/10/11', 'premiere-et-derniere-journee-de-championnat'],
  ['2021/01/24', 'fermeture-des-gymnases'],
  ['2021/08/26', 'rentree-2021'],
  ['2021/11/29', 'deuxieme-journee-de-championnat-2021-2022-paris'],
  ['2022/01/17', '3eme-journee-de-championnat-2021-2022-au-mans'],
  ['2022/03/07', '4eme-journee-de-championnat-2021-2022-a-tours'],
  ['2022/04/25', '6eme-journee-de-championnat-2021-2022-a-saint-sylvain'],
  ['2022/05/23', '7eme-journee-de-championnat-2021-2022-aux-ponts-de-ce'],
  ['2022/08/17', 'noisy-a-la-coupe-du-monde-des-clubs-2022-en-tchequie'],
  ['2022/11/27', 'hommes-1ere-journee-de-championnat-ligue-est-a-poitiers'],
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }],
  },
  async redirects() {
    return [
      { source: '/accueil', destination: '/', permanent: true },
      { source: '/category/actualites', destination: '/actualites', permanent: true },
      ...legacyArticles.map(([date, slug]) => ({
        source: `/${date}/${slug}`,
        destination: `/actualites/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
