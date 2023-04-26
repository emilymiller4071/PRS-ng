import { Component } from "@angular/core";

@Component({
    selector: 'product-edit',
    templateUrl: './product-edit.component.html'
})
export class ProductEditComponent {
    pageTitle: string = "Product Edit";
    products: any[] = [];
}