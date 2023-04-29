import { Component } from "@angular/core";

@Component({
    selector: 'app-vendor-list',
    templateUrl: './vendor-list.component.html',
    styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
    pageTitle: string = "Vendors List";
    vendors: any[] = [
        {
            "id": 1,
            "code": "WAL",
            "name": "Walburns",
            "address": "1234 Walburns Lane",
            "city": "Florence",
            "state": "KY",
            "zip": "41026",
            "phone": "859-221-1234",
            "email": "wallyworld@walburns.com"
          },
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
          },
          {
            "id": 3,
            "code": "MEI",
            "name": "Meiyer",
            "address": "555 Meiyer Drive",
            "city": "Erlanger",
            "state": "KY",
            "zip": "41018",
            "phone": "859-567-8901",
            "email": "super@meiyer.com"
          },
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
    ];
}