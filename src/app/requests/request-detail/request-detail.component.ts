import { Component } from "@angular/core";

@Component({
    selector: 'request-detail',
    templateUrl: './request-detail.component.html'
})
export class RequestDetailComponent {
    pageTitle: string = "Request Detail";
    products: any[] = [];
}