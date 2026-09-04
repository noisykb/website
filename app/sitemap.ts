import type { MetadataRoute } from 'next';
import { articles, pages } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = 'https://noisy-kinball.com';
  return [
    { url: origin, lastModified: new Date(), priority: 1 },
    { url: `${origin}/actualites`, lastModified: new Date(), priority: 0.8 },
    ...pages.map((page) => ({ url: `${origin}/${page.slug}`, lastModified: new Date(page.updatedAt.replace(' ', 'T') + 'Z'), priority: 0.7 })),
    ...articles.map((article) => ({ url: `${origin}/actualites/${article.slug}`, lastModified: new Date(article.updatedAt.replace(' ', 'T') + 'Z'), priority: 0.6 })),
  ];
}
