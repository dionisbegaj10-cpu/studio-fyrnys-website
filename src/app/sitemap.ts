import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { projects } from './projekte/data';
import { posts } from './blog/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/leistungen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/projekte`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/ueber-uns`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/kontakt`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE_URL}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map(p => ({
    url: `${SITE_URL}/projekte/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map(p => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
