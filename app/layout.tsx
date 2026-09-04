import type { Metadata } from 'next';
import { Barlow, JetBrains_Mono, Roboto_Slab } from 'next/font/google';
import './globals.css';

const barlow = Barlow({ variable: '--font-barlow', subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
const robotoSlab = Roboto_Slab({ variable: '--font-roboto-slab', subsets: ['latin'] });
const jetBrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://noisy-kinball.com'),
  title: { default: 'Noisy Kin-Ball', template: '%s — Noisy Kin-Ball' },
  description: 'Découvrez le Kin-Ball à Noisy-le-Grand : un sport collectif spectaculaire, accessible et fondé sur la coopération.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${barlow.variable} ${robotoSlab.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
