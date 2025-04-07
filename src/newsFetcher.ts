import Parser from 'rss-parser';
const parser = new Parser();

const feeds = [
  
   
    'https://www.finextra.com/rss/headlines.aspx',
    'https://www.finextra.com/rss/channel.aspx?channel=ai',
    'https://www.finextra.com/rss/channel.aspx?channel=cloud',
    'https://www.finextra.com/rss/channel.aspx?channel=developer',

];

export async function fetchTechNews(): Promise<string[]> {
  const allArticles: string[] = [];

  for (const url of feeds) {
    try {
      const feed = await parser.parseURL(url);
      const articles = feed.items.slice(0, 2).map(item => `${item.title} - ${item.link}`);
      allArticles.push(...articles);
    } catch (err) {
      console.error(`❌ Error al leer el feed ${url}:`, err);
    }
  }

  // Mezcla y selecciona los primeros 5
  const shuffled = allArticles.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
}
