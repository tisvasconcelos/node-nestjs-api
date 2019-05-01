import { Module } from '@nestjs/common';
import { HomeController } from './controllers/HomeController';
import { ProductController } from './controllers/ProductController';
import { ProductService } from './services/ProductService';

@Module({
  imports: [],
  controllers: [HomeController, ProductController],
  providers: [ProductService],
})
export class AppModule {}
