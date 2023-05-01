import { Component } from "@angular/core";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
    pageTitle: string = "User Edit";
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