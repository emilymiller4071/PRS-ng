import { Component } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
    pageTitle: string = "User Edit";
    user!: User;

    constructor(private userService: UserService) { }

    ngOnInit() {

        this.userService.update(this.user).subscribe(jsonResponse =>
            this.user = jsonResponse as User);
    }
   
}