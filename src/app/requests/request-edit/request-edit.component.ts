import { Component } from "@angular/core";

@Component({
    selector: 'request-edit',
    templateUrl: './request-edit.component.html'
})
export class RequestEditComponent {
    pageTitle: string = "Request Edit";
    products: any[] = [];
}