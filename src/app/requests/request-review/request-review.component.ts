import { Component } from "@angular/core";

@Component({
    selector: 'app-request-review',
    templateUrl: './request-review.component.html',
    styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
    pageTitle: string = "Request Review";
    requests: any[] = [
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
          },
          {
            "id": 3,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-06T00:00:00",
            "status": "Review",
            "total": 0,
            "userId": 3,
            "User": {
              "id": 3,
              "userName": "ahatfield",
              "password": "fieldhat23",
              "firstName": "Amy",
              "lastName": "Hatfield",
              "phone": "859-555-9101",
              "email": "ahatfield@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 5,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-12T00:00:00",
            "status": "Review",
            "total": 375.78,
            "userId": 5,
            "User": {
              "id": 5,
              "userName": "jmcanley",
              "password": "JacAnley",
              "firstName": "Jacob",
              "lastName": "McAnley",
              "phone": "859-555-1213",
              "email": "jmcanley@mail.com",
              "reviewer": true,
              "admin": false
            }
          }
    ];
}