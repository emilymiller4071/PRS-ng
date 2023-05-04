import { Component } from "@angular/core";
import { Product } from "src/model/product.class";
import { ProductService } from "src/app/service/product.service";

@Component({
    selector: 'app-products-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    pageTitle: string = "Products List";
    products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // subscribe to the list of products we get from the get request
    this.productService.getAll().subscribe(jsonResponse => {
      // add the data inside the returned JsonResponse to the array of products
      this.products = jsonResponse as Product[];
    });
  }

}
