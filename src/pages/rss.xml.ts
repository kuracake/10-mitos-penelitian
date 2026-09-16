import { getCollection } from 'astro:content';
import { site } from '../../src/site.config';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const myths = await getCollection('myths');

  const publishedMyths = myths
    .filter((myth) => !myth.data.draft)
    .sort((a, b) => a.data.mythNumber - b.data.mythNumber);

  const items = publishedMyths
    .map((myth) => {
      const url = new URL(`/myths/${myth.id}`, site.url).href;

      return `
    <item>
      <title>${escapeXml(`Mitos ${String(myth.data.mythNumber).padStart(2, '0')} — ${myth.data.title}`)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(myth.data.description)}</description>
      <category>${escapeXml(myth.data.category)}</category>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <description>${escapeXml(site.description)}</description>
    <link>${escapeXml(site.url)}</link>
    <language>${escapeXml(site.locale)}</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}