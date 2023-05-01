import { Component } from "@angular/core";
import { windowWhen } from "rxjs";
import { Product } from "src/model/product.class";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
    pageTitle: string = "Product Detail";
    product: Product = 
    {
        
        "id": 1,
        "partNbr": "SHO",
        "name": "uniform shoes",
        "price": 35.97,
        "unit": "per pair",
        "photoPath": "undefined",
        vendorID: 1,
        "vendor": {
            "id": 1,
            "code": "WAL",
            "name": "Walburns",
            "address": "1234 Walburns Lane",
            "city": "Florence",
            "state": "KY",
            "zip": "41026",
            "phone": "859-221-1234",
            "email": "wallyworld@walburns.com"
        },
        
    }
}