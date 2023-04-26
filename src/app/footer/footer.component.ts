import { Component } from "@angular/core";

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    pageTitle: string = "Footer Component";
    footer: any[] = [];
}