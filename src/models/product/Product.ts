import { Picture } from "../Picture";
import { Status } from "./Status";

export class Product {
    id: Number;
    name: String;
    price: Number;
    status: Status;
    picture: Picture;

    constructor(id: Number, name: String, price: Number, status: Status, picture: Picture) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.status = status;
        this.picture = picture;
    }
}