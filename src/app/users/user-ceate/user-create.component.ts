import { Component } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from "src/app/service/user.service";
import { Location } from "@angular/common";

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
    pageTitle: string = "User Create";
    user: User = new User();


    constructor(private userService: UserService,
        private location: Location) { }

    ngOnInit() {
        
    }

    create() {
        this.userService.create(this.user).subscribe(jsonResponse =>
            this.user = jsonResponse as User);
            this.location.back();
    } 
}
