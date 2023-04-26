import { Component } from "@angular/core";

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.html']
})
export class UserDetailComponent {
    pageTitle: string = "User Detail";
}