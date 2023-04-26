import { Component } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    pageTitle: string = "Header Component";
    products: any[] = [];
}