import { Component } from '@angular/core';
import { LineItem } from 'src/model/line-item.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-detail',
  templateUrl: './line-item-detail.component.html',
  styleUrls: ['./line-item-detail.component.css']
})
export class LineItemDetailComponent {
  lineItems: LineItem[] = [];
  lineItem: LineItem;
  id: number = 0;
  product: Product;


  constructor(private lineItemService: LineItemService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    //get the id from the url
    this.route.params.subscribe(params => this.id = params['id']);
    this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
}    

delete() {
    this.lineItemService.delete(this.id).subscribe(jsonResponse =>
        this.router.navigateByUrl("line-item/list"));
} 

getFormattedTotal(): string {
  const total = this.lineItem.quantity * this.lineItem.product.price;
  return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

}
