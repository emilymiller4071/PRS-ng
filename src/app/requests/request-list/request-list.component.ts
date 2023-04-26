import { Component } from "@angular/core";

@Component({
    selector: 'request-list',
    templateUrl: './request-list.component.html'
})
export class RequestListComponent {
    pageTitle: string = "Request List";
    products: any[] = [];
}