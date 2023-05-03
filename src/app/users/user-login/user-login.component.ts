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
    user!: User;

    constructor(private userService: UserService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        
        this.userService.login(this.user).subscribe{
            (loggedInUser: User) =>
            this.router.navigate('/home');
        }

    }    
}
// login(user: User) {
//     this.userService.login(user).subscribe(
//       (loggedInUser: User) => {
//         // Redirect to home page upon successful login
//         this.router.navigate(['/home']);
//       }