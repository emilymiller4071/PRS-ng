import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/model/line-item.class';
import { Vendor } from 'src/model/vendor.class';
import { Product } from 'src/model/product.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { VendorService } from 'src/app/service/vendor.service';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit{
  lineItem!: LineItem;
  vendor: Vendor = new Vendor();
  product: Product = new Product();
  id: number = 0;
  lineItems: LineItem[] = [];

  constructor(private lineItemService: LineItemService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe(params => this.id = params['id'])
      this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
    }

    update() {
      this.lineItemService.update(this.lineItem).subscribe(() => {
        this.router.navigateByUrl(`request/detail/${this.id}`);
      })
}
}
