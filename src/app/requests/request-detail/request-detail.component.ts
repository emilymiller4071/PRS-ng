import { Component } from "@angular/core";

@Component({
    selector: 'app-request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
    pageTitle: string = "Request Detail";
    request: any =
    {
        "id": 1,
        "description": "staff snacks",
        "justification": "people get hungry",
        "rejectionReason": null,
        "deliveryMode": "Pickup",
        "submittedDate": "2023-03-15T00:00:00",
        "dateNeeded": "2023-04-01T00:00:00",
        "status": "New",
        "total": 45,
        "userId": 1,
        "User": {
          "id": 1,
          "userName": "emiller",
          "password": "emilyIsCool",
          "firstName": "Emily",
          "lastName": "Miller",
          "phone": "859-555-1234",
          "email": "emiller@mail.com",
          "reviewer": true,
          "admin": true
        }
      }

      
}