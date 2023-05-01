import { Component } from "@angular/core";
import { Product } from "src/model/product.class";

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
    pageTitle: string = "Product Create";
    products!: Product;
}