import { Component } from "@angular/core";

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.html']
})
export class RequestListComponent {
    pageTitle: string = "Request List";
    products: any[] = [];
}