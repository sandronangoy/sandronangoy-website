import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const letters = await getCollection('letters', (e) => !e.data.draft);
  const models = await getCollection('models', (e) => !e.data.draft);
  const items = [
    ...letters.map((l) => ({ title: l.data.title, pubDate: l.data.date, description: l.data.dek || '', link: `/letters/${l.slug}/` })),
    ...models.map((m) => ({ title: m.data.title, pubDate: m.data.date, description: m.data.dek || '', link: `/models/${m.slug}/` })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  return rss({
    title: 'Sandro Nangoy',
    description: 'the wonderful business of compounding.',
    site: context.site,
    items,
  });
}
