import { Component } from "@angular/core";

@Component({
    selector: 'app-vendor-detail',
    templateUrl: './vendor-detail.component.html',
    styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
    pageTitle: string = "Vendor Detail";
    vendor: any =
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