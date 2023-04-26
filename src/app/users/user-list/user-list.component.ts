import { Component } from "@angular/core";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent {
    pageTitle: string = "Users List";
    products: any[] = [];
}