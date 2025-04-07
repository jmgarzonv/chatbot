import { WebClient } from '@slack/web-api';

const token = process.env.SLACK_BOT_TOKEN!;
const channel = process.env.SLACK_CHANNEL_ID!;
const client = new WebClient(token);

export async function sendNewsToSlack(news: string[]) {
  const message = news.join('\n');
  await client.chat.postMessage({
    channel,
    text: `📰 *Noticias Tech de la Semana*:\n${message}`,
  });
}
