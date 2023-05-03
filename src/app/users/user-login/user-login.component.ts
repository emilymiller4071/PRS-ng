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

    // ngOnInit() {
        
    //     this.route.params.subscribe(params => 
    //         this.username = params['username']);
    //         this.userService.post(this.username).subscribe(jsonResponse =>
    //             this.user = jsonResponse as User);

    //     this.userService.login(this.user).subscribe {
    //         (loggedInUser: User) =>
    //         this.router.navigateByUrl("");
    //     }

    // }    
}
// login(user: User) {
//     this.userService.login(user).subscribe(
//       (loggedInUser: User) => {
//         // Redirect to home page upon successful login
//         this.router.navigate(['/home']);
//       }