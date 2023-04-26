import { Component } from "@angular/core";

@Component({
    selector: 'vendor-detail',
    templateUrl: './vendor-detail.component.html'
})
export class VendorDetailComponent {
    pageTitle: string = "Vendor Detail";
    products: any[] = [];
}