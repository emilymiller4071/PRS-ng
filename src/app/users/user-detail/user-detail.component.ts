import { Component } from "@angular/core";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
    pageTitle: string = "User Detail";
    user: User = 
        {
            "id": 1,
            "firstName": "Emily",
            "lastName": "Miller",
            "phone": "859-555-1234",
            "email": "emiller@mail.com",
            "username": "emiller",
            "isReviewer": true,
            "isAdmin": true
          }
}