import { Component } from "@angular/core";

@Component({
    selector: 'request-create',
    templateUrl: './request-create.component.html'
})
export class RequestCreateComponent {
    pageTitle: string = "Request Create";
    products: any[] = [];
}