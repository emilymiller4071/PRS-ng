import { Component } from "@angular/core";

@Component({
    selector: 'app-review-detail',
    templateUrl: './review-detail.component.html',
    styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent {
    pageTitle: string = "Review Detail";
    request: any = 
        {
            "id": 1,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-01T00:00:00",
            "status": "Review",
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