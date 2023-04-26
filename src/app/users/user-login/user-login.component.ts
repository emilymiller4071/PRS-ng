import { Component } from "@angular/core";

@Component({
    selector: 'user-login',
    templateUrl: './user-login.component.html'
})
export class UserLoginComponent {
    pageTitle: string = "User Login";
    products: any[] = [];
}