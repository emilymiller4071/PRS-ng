import { Component } from "@angular/core";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
    pageTitle: string = "Request Detail";
    user!: User;
    request: Request =
    {
        "id": 20,
        "description": "office decor",
        "justification": "new uniform needed",
        "rejectionReason": null,
        "deliveryMode": "Pickup",
        "submittedDate": "2023-03-15T00:00:00",
        "dateNeeded": "2023-08-15",
        "status": "New",
        "total": 0.0,
        "user": {
            "id": 20,
            "username": "jeve",
            "password": "junigirl",
            "firstName": "Juniper",
            "lastName": "Eve",
            "phone": "859-555-4243",
            "email": "jeve@mail.com",
            "isReviewer": false,
            "isAdmin": false
        }
    }
      
}