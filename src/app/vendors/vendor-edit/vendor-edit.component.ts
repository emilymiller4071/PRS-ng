import { Component } from "@angular/core";
import { Vendor } from "src/model/vendor.class";

@Component({
    selector: 'app-vendor-edit',
    templateUrl: './vendor-edit.component.html',
    styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
    pageTitle: string = "Vendor Edit";
    vendor: Vendor = 
    {
        "id": 4,
        "code": "HOB",
        "name": "Hobby Foyer",
        "address": "7345 Hobby Street",
        "city": "Independence",
        "state": "KY",
        "zip": "41017",
        "phone": "859-123-4567",
        "email": "thefoyer@hobbyfoyer.com"
    }
}