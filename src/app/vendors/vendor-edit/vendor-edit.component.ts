import { Component } from "@angular/core";

@Component({
    selector: 'vendor-edit',
    templateUrl: './vendor-edit.component.html'
})
export class VendorEditComponent {
    pageTitle: string = "Vendor Edit";
    products: any[] = [];
}