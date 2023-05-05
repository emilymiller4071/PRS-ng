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
  lineItems: LineItem[] = [];
  lineItem!: LineItem;
  product!: Product;
  request!: Request;
  id: number = 0;

  constructor(private lineItemService: LineItemService,
    private requestService: RequestService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }


    ngOnInit() {
      this.lineItemService.getAll().subscribe(jsonResponse =>
        this.lineItems = jsonResponse as LineItem[]);
    }

    getById() {
      this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
    }

    delete() {
      this.lineItemService.delete(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
    }
}
