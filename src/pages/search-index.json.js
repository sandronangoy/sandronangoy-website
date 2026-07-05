import { getCollection } from 'astro:content';

function strip(md) {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`~\[\]()!|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function GET() {
  const [letters, thread, models] = await Promise.all([
    getCollection('letters', (e) => !e.data.draft),
    getCollection('thread', (e) => !e.data.draft),
    getCollection('models', (e) => !e.data.draft),
  ]);
  const items = [];
  for (const l of letters) items.push({ type: 'letter', title: l.data.title, dek: l.data.dek || '', url: `/letters/${l.slug}/`, date: l.data.date.toISOString().slice(0, 10), text: strip(l.body).slice(0, 700) });
  for (const m of models) items.push({ type: 'model', title: m.data.title, dek: m.data.dek || '', url: `/models/${m.slug}/`, date: m.data.date.toISOString().slice(0, 10), text: strip(m.body).slice(0, 700) });
  for (const t of thread) items.push({ type: 'thread', title: '', dek: '', url: '/thread/', date: t.data.date.toISOString().slice(0, 10), text: strip(t.body).slice(0, 400) });
  items.sort((a, b) => (a.date < b.date ? 1 : -1));
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
