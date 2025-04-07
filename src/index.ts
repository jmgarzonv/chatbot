import dotenv from 'dotenv';
dotenv.config();
import cron from 'node-cron';
import { fetchTechNews } from './newsFetcher';
import { sendNewsToSlack } from './slackBot';



cron.schedule('55 22 * * 0', async () => {
    console.log("📤 Enviando noticias de tecnología...");
  const news = await fetchTechNews();
  await sendNewsToSlack(news);
});

console.log("🕐 Bot activo. Esperando al próximo domingo..");
async function testNow() {
    console.log("🚨 Envío de prueba manual iniciado...");
    const news = await fetchTechNews();
    await sendNewsToSlack(news);
  }
  
  testNow(); // 👈 Esto lanza la prueba
  