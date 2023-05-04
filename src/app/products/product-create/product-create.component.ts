import { Component } from "@angular/core";
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/model/product.class";

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
    pageTitle: string = "Product Create";
    product!: Product;


    constructor(private productService: ProductService) { }

    ngOnInit() { }
    
    
    create() {
        this.productService.create(this.product).subscribe(jsonResponse =>
            this.product = jsonResponse as Product);
    } 
}
