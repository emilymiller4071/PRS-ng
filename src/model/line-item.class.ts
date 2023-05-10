import {Request} from "./request.class";
import { Product} from "./product.class";

export class LineItem {
    id: number;
    request!: Request;
    product!: Product;
    quantity: number;

    constructor(id: number = null, request: Request = new Request(),
        product: Product = new Product(), quantity: number = 1) {
            this.id = id;
            this.request = request;
            this.product = product;
            this.quantity = quantity;
        }

}