import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "src/app/service/product.service";
import { Product } from "src/model/product.class";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
    pageTitle: string = "Product Edit";
    product!: Product;
    id: number = 0;

    constructor(private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() { 
        this.route.params.subscribe(params => this.id = params['id']);
        this.productService.getById(this.id).subscribe(jsonResponse =>
            {this.product = jsonResponse as Product});
    }
   update() {
    this.productService.update(this.product).subscribe(jsonResponse => {
        this.product = jsonResponse as Product
    });
   }
}