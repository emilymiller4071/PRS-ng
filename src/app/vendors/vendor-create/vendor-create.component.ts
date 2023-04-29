import { Component } from "@angular/core";

@Component({
    selector: 'app-vendor-create',
    templateUrl: './vendor-create.component.html',
    styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
    pageTitle: string = "Vendor Create";
    vendor: any = 
    {
        "id": 2,
        "code": "TAR",
        "name": "Targette",
        "address": "7171 Houston Avenue",
        "city": "Florence",
        "state": "KY",
        "zip": "41020",
        "phone": "859-345-6789",
        "email": "bullseye@targette.com"
    }
}