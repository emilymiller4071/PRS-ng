import { Component } from "@angular/core";
import { VendorService } from "src/app/service/vendor.service";
import { Vendor } from "src/model/vendor.class";
import { Location } from "@angular/common";

@Component({
    selector: 'app-vendor-create',
    templateUrl: './vendor-create.component.html',
    styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
    pageTitle: string = "Vendor Create";
    vendor: Vendor = new Vendor();


    constructor(private vendorService: VendorService,
        private location: Location) { }

    ngOnInit() { }

    create() {
        this.vendorService.create(this.vendor).subscribe(jsonResponse =>
            this.vendor = jsonResponse as Vendor);
            this.location.back();
    } 
}