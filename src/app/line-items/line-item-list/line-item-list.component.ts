import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/model/line-item.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { Request } from 'src/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Product } from 'src/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent implements OnInit{
  pageTitle: string = "Line Items List";
  lineItems: LineItem[] = [];
  lineItem: LineItem = new LineItem();
  product: Product = new Product();
  products: Product[] = [];
  id: number = 1;
  object: Object = new Object();
  request: Request = new Request;

  constructor(private lineItemService: LineItemService,
    private requestService: RequestService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }


    ngOnInit() {
      this.route.params.subscribe(params => this.id = params['id']);      
      this.lineItemService.getByRequestId(this.id).subscribe(
        jsonResponse => {
        console.log(jsonResponse);
         this.lineItems = jsonResponse as LineItem[]});
       this.productService.getAll().subscribe(jsonResponse =>
        this.products = jsonResponse as Product[]);  
    }

    // create() {
    //   this.productService.getById(this.id).subscribe(p =>
    //     this.lineItem.product = this.product);
      
    
    //   this.lineItemService.create(this.lineItem).subscribe(jsonResponse => 
    //     this.lineItem = jsonResponse as LineItem);   
    //   }
    

    // create() {
    //   this.productService.getById(this.id).pipe(
    //     switchMap(product => {
    //       this.lineItem.product = product;
    //       return this.lineItemService.create(this.lineItem);
    //     })
    //   ).subscribe(jsonResponse => {
    //     this.lineItem = jsonResponse as LineItem;
    //   });   
    // }

    create() {
      this.route.params.subscribe(params => this.id = params['id'])
      this.requestService.getById(this.id).subscribe(request => {
        this.lineItem.request = request as Request;
        this.productService.getById(this.lineItem.product.id).subscribe(product => {
          this.product = product as Product;
          this.lineItemService.create(this.lineItem).subscribe(lineItem => {
            this.lineItem = lineItem as LineItem;
            
            this.router.navigateByUrl('request/line-item/list');
          });
        });
      });
    }

    getById() {
      this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
    }

    delete() {
      this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
      this.lineItemService.delete(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
        this.router.navigateByUrl('/request/list');       
    }

    update() {
      this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
      this.router.navigateByUrl(`line-item/edit/${this.id}`);
    }

    getFormattedTotal(): string {
      const total = this.lineItem.quantity * this.lineItem.product.price;
      return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

}
