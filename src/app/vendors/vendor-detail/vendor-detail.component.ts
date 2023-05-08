import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VendorService } from "src/app/service/vendor.service";
import { Vendor } from "src/model/vendor.class";

@Component({
    selector: 'app-vendor-detail',
    templateUrl: './vendor-detail.component.html',
    styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
    pageTitle: string = "Vendor Detail";
    vendor!: Vendor;
    id: number = 0;
  

constructor(private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit() {

        this.route.params.subscribe(params => this.id = params['id']);
        this.vendorService.getById(this.id).subscribe(jsonResponse =>
            this.vendor = jsonResponse as Vendor);
    }    

    delete() {
        this.vendorService.delete(this.id).subscribe(jsonResponse =>
            this.router.navigateByUrl("vendor/list"));
    }

    update() {
        this.vendorService.update(this.vendor).subscribe(jsonResponse => {
            this.vendor = jsonResponse as Vendor;
            this.router.navigate(['/vendor/detail', this.vendor.id]);
        });
       }
}
