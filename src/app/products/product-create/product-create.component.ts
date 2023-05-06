import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/service/product.service";
import { VendorService } from "src/app/service/vendor.service";
import { Product } from "src/model/product.class";
import { Vendor } from "src/model/vendor.class";
import { Location } from "@angular/common";

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{
    pageTitle: string = "Product Create";
    product: Product = new Product();
    vendors: Vendor[];
    id: number = 0;


    constructor(private productService: ProductService,
        private vendorService: VendorService,
        private location: Location) { }

    ngOnInit() { 
        this.vendorService.getAll().subscribe(
            vendors => {
              this.vendors = vendors;
            })
        }       
    
    
    create() {
        this.productService.create(this.product).subscribe(jsonResponse =>
            this.product = jsonResponse as Product);
            this.location.back();
        } 
    }
