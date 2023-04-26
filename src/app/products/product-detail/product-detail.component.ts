import { Component } from "@angular/core";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.html']
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail";
}