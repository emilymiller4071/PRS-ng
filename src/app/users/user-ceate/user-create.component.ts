import { Component } from "@angular/core";

@Component({
    selector: 'user-create',
    templateUrl: './user-create.component.html'
})
export class UserCreateComponent {
    pageTitle: string = "User Create";
    products: any[] = [];
}