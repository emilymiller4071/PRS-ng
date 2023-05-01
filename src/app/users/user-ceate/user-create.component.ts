import { Component } from "@angular/core";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
    pageTitle: string = "User Create";
    user!: User;
}