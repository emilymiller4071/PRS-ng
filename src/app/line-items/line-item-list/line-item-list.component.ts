import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/model/line-item.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { Request } from 'src/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Product } from 'src/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent implements OnInit{
  pageTitle: string = "Line Items List";
  lineItems: LineItem[] = [
    {
      "id": 1,
      "request": null,
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
      "quantity": 100
  },
  {
      "id": 2,
      "request": {
          "id": 2,
          "description": "staff snacks",
          "justification": "people get hungry",
          "rejectionReason": null,
          "deliveryMode": "Pickup",
          "submittedDate": "2023-05-04T00:00:00",
          "dateNeeded": "2023-04-05",
          "status": "Approved",
          "total": 1998.0,
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
      "quantity": 200
  }
  ];
  lineItem!: LineItem;
  product!: Product;
  id: number = 0;

  constructor(private lineItemService: LineItemService,
    private requestService: RequestService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }


    ngOnInit() {
      this.route.params.subscribe(params => this.id = params['id']);
      this.lineItemService.getByRequestId(this.id).subscribe(
        jsonResponse => this.lineItems = jsonResponse as LineItem[]);
      
    }

    getById() {
      this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
    }

    delete() {
      this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem)
      this.lineItemService.delete(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
    }

    getFormattedTotal(): string {
      const total = this.lineItem.quantity * this.lineItem.product.price;
      return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
}
