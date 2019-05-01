import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { INestApplication } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { VersionMiddleware } from './middlewares/VersionMiddleware';
// import { version } from './middlewares/VersionMiddleware';

async function bootstrap() {
  const app : INestApplication = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    );

  let versionMiddleware = new VersionMiddleware();
  app.use(versionMiddleware.use);

  await app.listen(3000);
}
bootstrap();
