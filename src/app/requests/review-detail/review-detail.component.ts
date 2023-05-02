import { Component } from "@angular/core";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-review-detail',
    templateUrl: './review-detail.component.html',
    styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent {
    pageTitle: string = "Review Detail";
    user!: User;
    request: Request = 
    {
        "id": 16,
        "description": "office decor",
        "justification": "new hire needs desk",
        "rejectionReason": null,
        "deliveryMode": "Pickup",
        "submittedDate": "2023-03-15T00:00:00",
        "dateNeeded": "2023-07-22",
        "status": "New",
        "total": 0.0,
        "user": {
            "id": 16,
            "username": "knewkirk",
            "password": "newkev",
            "firstName": "Kevin",
            "lastName": "Newkirk",
            "phone": "859-555-3435",
            "email": "knewkirk@mail.com",
            "isReviewer": true,
            "isAdmin": false
        }
    }
}
