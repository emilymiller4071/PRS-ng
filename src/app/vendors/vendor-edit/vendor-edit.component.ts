import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VendorService } from "src/app/service/vendor.service";
import { Vendor } from "src/model/vendor.class";

@Component({
    selector: 'app-vendor-edit',
    templateUrl: './vendor-edit.component.html',
    styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
    pageTitle: string = "Vendor Edit";
    vendor: Vendor = new Vendor();
    id: number = 0;

    constructor(private vendorService: VendorService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() { 
        this.route.params.subscribe(params => this.id = params['id']);
        this.vendorService.getById(this.id).subscribe(jsonResponse =>
            {this.vendor = jsonResponse as Vendor});
    }
   update() {
    this.vendorService.update(this.vendor).subscribe(jsonResponse => {
        this.vendor = jsonResponse as Vendor;
        this.router.navigate(['/vendor/detail', this.vendor.id]);
    });
   }
}