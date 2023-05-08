import { Component } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { User } from "src/model/user.class";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
    pageTitle: string = "User Login";
    user: User = new User;
    loggedInUser = new User;
    validLogin: boolean = true;

    constructor(private userService: UserService,
        private router: Router,
        private route: ActivatedRoute) {}

     ngOnInit() {

      }  

      login() {

        this.userService.login(this.user).subscribe(jsonResponse =>
            this.loggedInUser = jsonResponse as User);

            console.log(this.loggedInUser.username);
            if (this.loggedInUser.username != "") {
                localStorage.setItem('currentUser', JSON.stringify(this.user));
                this.router.navigateByUrl('/home');
            } else {
                this.validLogin = false;
            }
    }
}