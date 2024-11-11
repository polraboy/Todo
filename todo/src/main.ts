import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { NestFactory } from '@nestjs/core';
import { AppModule } from '..backen';

import App from './App.vue'
import router from './router'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // เพิ่ม CORS
  await app.listen(3000);
}
bootstrap();
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
