import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule, { logger: ['error', 'warn', 'log', 'verbose'] });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
