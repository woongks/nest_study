import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //만약 형식에 맞지 않는 data를 받아오면 해당 항목만 무시한다.
    }),
  );
  await app.listen(3000);
}
bootstrap();
