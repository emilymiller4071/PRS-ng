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
