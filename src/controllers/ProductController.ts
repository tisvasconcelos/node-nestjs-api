import { Controller, Get, Headers, Logger, Req, Request, Res, Param, Post, Body, Header, Inject, NotFoundException } from "@nestjs/common";
import { Product } from "../models/product/Product";
import { FastifyReply } from "fastify";
import { ProductService } from "../services/ProductService";
import { Status } from "src/models/product/Status";

@Controller('product')
export class ProductController {
    private logger : Logger = new Logger(ProductController.name);

    @Inject()
    private productService : ProductService;

    @Get()
    findAll(@Headers('x-app-version') version: String, @Req() req : Request): Array<Product> {
        this.logger.log('X-App-Version: ' + version);

        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : Number) : Product {
        let product : Product = this.productService.findAll().find(p => p.id === Number(id));
        if(!product) {
            throw new NotFoundException();
        }
        return product;
    }

    @Get('status/:status')
    findOneByStatus(@Param('status') status : Status) : Array<Product> {
        let products : Array<Product> = this.productService.findAllBy(status);
        if(!products) {
            throw new NotFoundException();
        }
        return products;
    }

    @Get('html')
    @Header('Content-Type', 'text/html')
    html(@Res() res : FastifyReply<Response>): void {
        res.send('<strong>asd</strong>');
    }

    @Post()
    create(@Body() product : Product) : void {
        this.logger.log(product.name);
    }

}