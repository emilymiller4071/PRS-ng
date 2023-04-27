import { Component } from "@angular/core";

@Component({
    selector: 'app-vendor-list',
    templateUrl: './vendor-list.component.html',
    styleUrls: ['./vendor-list.component.html']
})
export class VendorListComponent {
    pageTitle: string = "Vendors List";
    vendors: any[] = [];
}