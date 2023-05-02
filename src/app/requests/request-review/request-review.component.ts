import { Component } from "@angular/core";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-request-review',
    templateUrl: './request-review.component.html',
    styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
    pageTitle: string = "Request Review";
    users: User[];
    requests: Request[] = [
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
            "user": {
              "id": 1,
              "username": "emiller",
              "password": "emilyIsCool",
              "firstName": "Emily",
              "lastName": "Miller",
              "phone": "859-555-1234",
              "email": "emiller@mail.com",
              "isReviewer": true,
              "isAdmin": true
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
            "user": {
              "id": 3,
              "username": "ahatfield",
              "password": "fieldhat23",
              "firstName": "Amy",
              "lastName": "Hatfield",
              "phone": "859-555-9101",
              "email": "ahatfield@mail.com",
              "isReviewer": true,
              "isAdmin": false
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
            "user": {
              "id": 5,
              "username": "jmcanley",
              "password": "JacAnley",
              "firstName": "Jacob",
              "lastName": "McAnley",
              "phone": "859-555-1213",
              "email": "jmcanley@mail.com",
              "isReviewer": true,
              "isAdmin": false
            }
          }
    ];
}