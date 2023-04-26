import { Component } from "@angular/core";

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent {
    pageTitle: string = "User Edit";
    products: any[] = [];
}