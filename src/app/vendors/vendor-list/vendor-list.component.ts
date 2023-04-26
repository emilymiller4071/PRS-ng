import { Component } from "@angular/core";

@Component({
    selector: 'vendor-list',
    templateUrl: './vendor-list.component.html'
})
export class VendorListComponent {
    pageTitle: string = "Vendors List";
    products: any[] = [];
}