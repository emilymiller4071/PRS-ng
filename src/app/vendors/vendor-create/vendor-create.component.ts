import { Component } from "@angular/core";

@Component({
    selector: 'vendor-create',
    templateUrl: './vendor-create.component.html'
})
export class VendorCreateComponent {
    pageTitle: string = "Vendor Create";
    products: any[] = [];
}