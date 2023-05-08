import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/model/line-item.class';
import { Vendor } from 'src/model/vendor.class';
import { Product } from 'src/model/product.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { VendorService } from 'src/app/service/vendor.service';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit{
  lineItem!: LineItem;
  vendor!: Vendor;
  product!: Product;
  id: number = 0;
  lineItems: LineItem[] = [
    {
        "id": 1,
        "request": {
            "id": 1,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-05-04T00:00:00",
            "dateNeeded": "2023-04-01",
            "status": "Review",
            "total": 450.0,
            "user": {
                "id": 1,
                "username": "emiller",
                "password": "emilyIsCool",
                "firstName": "Emily",
                "lastName": "Rauch",
                "phone": "859-555-1235",
                "email": "emiller@mail.com",
                "isReviewer": true,
                "isAdmin": true
            }
        },
        "product": {
            "id": 1,
            "partNbr": "SNCK",
            "name": "snack mix",
            "price": 4.5,
            "unit": "each",
            "photoPath": null,
            "vendor": {
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
        "quantity": 100
    },
    {
        "id": 2,
        "request": {
            "id": 1,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-05-04T00:00:00",
            "dateNeeded": "2023-04-05",
            "status": "Approved",
            "total": 0.0,
            "user": {
                "id": 2,
                "username": "dalan",
                "password": "p@ssw0rd",
                "firstName": "Dustin",
                "lastName": "Alan",
                "phone": "859-555-5678",
                "email": "dustin@mail.com",
                "isReviewer": true,
                "isAdmin": true
            }
        },
        "product": {
            "id": 9,
            "partNbr": "SODA",
            "name": "soda pop",
            "price": 9.99,
            "unit": "12-pk",
            "photoPath": null,
            "vendor": {
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
        "quantity": 20
    },
    {
        "id": 3,
        "request": {
            "id": 2,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-06",
            "status": "New",
            "total": 0.0,
            "user": {
                "id": 3,
                "username": "ahatfield",
                "password": "fieldhat23",
                "firstName": "Amy",
                "lastName": "Hatfield",
                "phone": "859-555-9101",
                "email": "ahatfield@mail.com",
                "isReviewer": true,
                "isAdmin": false
            }
        },
        "product": {
            "id": 10,
            "partNbr": "CND",
            "name": "chewy candy",
            "price": 20.99,
            "unit": "case",
            "photoPath": null,
            "vendor": {
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
        "quantity": 5
    },
    {
        "id": 4,
        "request": {
            "id": 2,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-10",
            "status": "New",
            "total": 0.0,
            "user": {
                "id": 4,
                "username": "caseycakes",
                "password": "secretcode",
                "firstName": "Casey",
                "lastName": "Craiger",
                "phone": "859-555-1112",
                "email": "ccraiger@mail.com",
                "isReviewer": true,
                "isAdmin": false
            }
        },
        "product": {
            "id": 8,
            "partNbr": "SNCK",
            "name": "snack mix",
            "price": 4.5,
            "unit": "each",
            "photoPath": null,
            "vendor": {
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
        "quantity": 10
    },
    {
        "id": 5,
        "request": {
            "id": 2,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-05-01T00:00:00",
            "dateNeeded": "2023-04-12",
            "status": "Approved",
            "total": 0.0,
            "user": {
                "id": 5,
                "username": "jmcanley",
                "password": "JacAnley",
                "firstName": "Jacob",
                "lastName": "McAnley",
                "phone": "859-555-1213",
                "email": "jmcanley@mail.com",
                "isReviewer": true,
                "isAdmin": false
            }
        },
        "product": {
            "id": 10,
            "partNbr": "CND",
            "name": "chewy candy",
            "price": 20.99,
            "unit": "case",
            "photoPath": null,
            "vendor": {
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
        "quantity": 300
    },
    {
        "id": 6,
        "request": {
            "id": 3,
            "description": "supply room re-stock",
            "justification": "low on stock",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-30",
            "status": "New",
            "total": 0.0,
            "user": {
                "id": 6,
                "username": "tmcdaniel",
                "password": "mCted1985",
                "firstName": "Ted",
                "lastName": "McDaniel",
                "phone": "859-555-1415",
                "email": "tmcdaniel@mail.com",
                "isReviewer": true,
                "isAdmin": false
            }
        },
        "product": {
            "id": 4,
            "partNbr": "PNCL",
            "name": "pencils",
            "price": 8.25,
            "unit": "unit",
            "photoPath": null,
            "vendor": {
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
        "quantity": 20
    },
    {
        "id": 7,
        "request": {
            "id": 3,
            "description": "office supplies",
            "justification": "ran out of a few things",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-05-01",
            "status": "New",
            "total": 0.0,
            "user": {
                "id": 7,
                "username": "tferguson",
                "password": "fergie",
                "firstName": "Trent",
                "lastName": "Ferguson",
                "phone": "859-555-1617",
                "email": "tferguson@mail.com",
                "isReviewer": true,
                "isAdmin": false
            }
        },
        "product": {
            "id": 5,
            "partNbr": "PEN",
            "name": "pens",
            "price": 12.0,
            "unit": "20 count",
            "photoPath": null,
            "vendor": {
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
        "quantity": 200
    },
    {
        "id": 8,
        "request": {
            "id": 3,
            "description": "office supplies",
            "justification": "need to complete job requirements",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-05-07",
            "status": "New",
            "total": 0.0,
            "user": {
                "id": 8,
                "username": "iokafor",
                "password": "OkaIke",
                "firstName": "Ike",
                "lastName": "Okafor",
                "phone": "859-555-1819",
                "email": "iokafor@mail.com",
                "isReviewer": true,
                "isAdmin": false
            }
        },
        "product": {
            "id": 6,
            "partNbr": "WTO",
            "name": "white out",
            "price": 5.45,
            "unit": "each",
            "photoPath": null,
            "vendor": {
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
        "quantity": 50
    },
    {
        "id": 9,
        "request": {
            "id": 3,
            "description": "supplies",
            "justification": "monthly supply re-stock",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-06-01",
            "status": "New",
            "total": 0.0,
            "user": {
                "id": 9,
                "username": "msmith",
                "password": "justLikeMike",
                "firstName": "Mike",
                "lastName": "Smith",
                "phone": "859-555-2021",
                "email": "msmith@mail.com",
                "isReviewer": true,
                "isAdmin": false
            }
        },
        "product": {
            "id": 7,
            "partNbr": "POS",
            "name": "post-its",
            "price": 7.99,
            "unit": "3-pk",
            "photoPath": null,
            "vendor": {
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
        "quantity": 100
    }
];

  constructor(private lineItemService: LineItemService,
    private vendorService: VendorService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => this.id = params['id']);
        this.lineItemService.getById(this.id).subscribe(jsonResponse =>
            {this.lineItem = jsonResponse as LineItem});
    }

    update() {
      this.lineItemService.update(this.lineItem).subscribe(jsonResponse => {
          this.lineItem = jsonResponse as LineItem;
          this.location.back();
      });
}
}
