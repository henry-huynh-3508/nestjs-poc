import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(serverConfig.port);
  logger.log(`Application listening on port ${serverConfig.port}`);
}
bootstrap();
