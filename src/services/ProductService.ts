import { Product } from "../models/product/Product";
import { Picture } from "../models/Picture";
import { Injectable, Logger } from "@nestjs/common";
import { Status } from "src/models/product/Status";

@Injectable()
export class ProductService {
    private logger : Logger = new Logger(ProductService.name);

    private products : Array<Product> = [
        new Product(1, "Convite", 10, Status.AVAILABLE, new Picture("https://img.elo7.com.br/product/zoom/12390DA/convite-para-casamento-decoracao-com-flores.jpg", "Convite para casamento")),
        new Product(2, "Carteira vegana", 10, Status.AVAILABLE, new Picture("https://img.elo7.com.br/product/zoom/1CEE698/carteira-camuflada-ultraslim-zalupe-vegana.jpg", "Carteira vegana")),
        new Product(3, "Carteirade de couro", 20, Status.AVAILABLE, new Picture("https://img.elo7.com.br/product/zoom/1CEE698/carteira-camuflada-ultraslim-zalupe-vegana.jpg", "Carteira vegana")),
        new Product(4, "Convite para casamento retrô", 45.90, Status.UNAVAILABLE, new Picture("https://img.elo7.com.br/product/zoom/12390DA/convite-para-casamento-decoracao-com-flores.jpg", "Convite para casamento"))
    ];

    findAll() : Array<Product> {
        return this.products;
    }

    findAllBy(status : Status) : Array<Product> {
        this.logger.log(this.products[0].status);
        return this.products.filter(p => p.status === status);
    }

}