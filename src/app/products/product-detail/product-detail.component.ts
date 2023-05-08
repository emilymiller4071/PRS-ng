import { Component } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/service/product.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail";
    product!: Product;
    id: number = 0;


    constructor(private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        //get the id from the url
        this.route.params.subscribe(params => this.id = params['id']);
        this.productService.getById(this.id).subscribe(jsonResponse =>
            this.product = jsonResponse as Product);
    }    

    editClick() {
        this.productService.getById(this.id).subscribe(jsonResponse =>
            this.router.navigateByUrl(`product/edit/${this.id}`))
    }

    delete() {
        this.productService.delete(this.id).subscribe(jsonResponse =>
            this.router.navigateByUrl("product/list"));
    }    
}