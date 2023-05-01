import { Component } from "@angular/core";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
    pageTitle: string = "User Login";
    user!: User;
}