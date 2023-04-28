import { Component } from "@angular/core";

@Component({
    selector: 'app-products-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    pageTitle: string = "Products List";
    name: string = "product";
    products: any[] = [
        {
            "id": 1,
            "partNbr": "SHO",
            "name": "uniform shoes",
            "price": 35.97,
            "unit": "per pair",
            "photoPath": null,
            "vendorId": 1,
            "Vendor": {
              "id": 1,
              "code": "WAL",
              "name": "Walburns",
              "address": "1234 Walburns Lane",
              "city": "Florence",
              "state": "KY",
              "zip": "41026",
              "phone": "859-221-1234",
              "email": "wallyworld@walburns.com"
            }
          },
          {
            "id": 2,
            "partNbr": "SHI",
            "name": "uniform shirt",
            "price": 42,
            "unit": "each",
            "photoPath": null,
            "vendorId": 1,
            "Vendor": {
              "id": 1,
              "code": "WAL",
              "name": "Walburns",
              "address": "1234 Walburns Lane",
              "city": "Florence",
              "state": "KY",
              "zip": "41026",
              "phone": "859-221-1234",
              "email": "wallyworld@walburns.com"
            }
          },
          {
            "id": 3,
            "partNbr": "PNT",
            "name": "uniform pants",
            "price": 25.99,
            "unit": "each",
            "photoPath": null,
            "vendorId": 1,
            "Vendor": {
              "id": 1,
              "code": "WAL",
              "name": "Walburns",
              "address": "1234 Walburns Lane",
              "city": "Florence",
              "state": "KY",
              "zip": "41026",
              "phone": "859-221-1234",
              "email": "wallyworld@walburns.com"
            }
          },
          {
            "id": 4,
            "partNbr": "PNCL",
            "name": "pencils",
            "price": 8.25,
            "unit": "unit",
            "photoPath": null,
            "vendorId": 2,
            "Vendor": {
              "id": 2,
              "code": "TAR",
              "name": "Targette",
              "address": "7171 Houston Avenue",
              "city": "Florence",
              "state": "KY",
              "zip": "41020",
              "phone": "859-345-6789",
              "email": "bullseye@targette.com"
            }
          },
          {
            "id": 5,
            "partNbr": "PEN",
            "name": "pens",
            "price": 12,
            "unit": "20 count",
            "photoPath": null,
            "vendorId": 2,
            "Vendor": {
              "id": 2,
              "code": "TAR",
              "name": "Targette",
              "address": "7171 Houston Avenue",
              "city": "Florence",
              "state": "KY",
              "zip": "41020",
              "phone": "859-345-6789",
              "email": "bullseye@targette.com"
            }
          },
          {
            "id": 6,
            "partNbr": "WTO",
            "name": "white out",
            "price": 5.45,
            "unit": "each",
            "photoPath": null,
            "vendorId": 2,
            "Vendor": {
              "id": 2,
              "code": "TAR",
              "name": "Targette",
              "address": "7171 Houston Avenue",
              "city": "Florence",
              "state": "KY",
              "zip": "41020",
              "phone": "859-345-6789",
              "email": "bullseye@targette.com"
            }
          },
          {
            "id": 7,
            "partNbr": "POS",
            "name": "post-its",
            "price": 7.99,
            "unit": "3-pk",
            "photoPath": null,
            "vendorId": 2,
            "Vendor": {
              "id": 2,
              "code": "TAR",
              "name": "Targette",
              "address": "7171 Houston Avenue",
              "city": "Florence",
              "state": "KY",
              "zip": "41020",
              "phone": "859-345-6789",
              "email": "bullseye@targette.com"
            }
          },
          {
            "id": 8,
            "partNbr": "SNCK",
            "name": "snack mix",
            "price": 4.5,
            "unit": "each",
            "photoPath": null,
            "vendorId": 3,
            "Vendor": {
              "id": 3,
              "code": "MEI",
              "name": "Meiyer",
              "address": "555 Meiyer Drive",
              "city": "Erlanger",
              "state": "KY",
              "zip": "41018",
              "phone": "859-567-8901",
              "email": "super@meiyer.com"
            }
          },
          {
            "id": 9,
            "partNbr": "SODA",
            "name": "soda pop",
            "price": 9.99,
            "unit": "12-pk",
            "photoPath": null,
            "vendorId": 3,
            "Vendor": {
              "id": 3,
              "code": "MEI",
              "name": "Meiyer",
              "address": "555 Meiyer Drive",
              "city": "Erlanger",
              "state": "KY",
              "zip": "41018",
              "phone": "859-567-8901",
              "email": "super@meiyer.com"
            }
          },
          {
            "id": 10,
            "partNbr": "CND",
            "name": "chewy candy",
            "price": 20.99,
            "unit": "case",
            "photoPath": null,
            "vendorId": 3,
            "Vendor": {
              "id": 3,
              "code": "MEI",
              "name": "Meiyer",
              "address": "555 Meiyer Drive",
              "city": "Erlanger",
              "state": "KY",
              "zip": "41018",
              "phone": "859-567-8901",
              "email": "super@meiyer.com"
            }
          }   
    ]

    constructor() {}

//     onCreate() {
//       this.router.navigate(['product/create']);
//     }
}