import { Component } from "@angular/core";
import { VendorService } from "src/app/service/vendor.service";
import { Vendor } from "src/model/vendor.class";

@Component({
    selector: 'app-vendor-list',
    templateUrl: './vendor-list.component.html',
    styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
    pageTitle: string = "Vendors List";
    vendors: Vendor[] = []

    constructor(private vendorService: VendorService) {}

    ngOnInit() {
        
      this.vendorService.getAll().subscribe(jsonResponse => {
        this.vendors = jsonResponse as Vendor[];
      });
    }    



}