import { Component } from "@angular/core";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.html']
})
export class MenuComponent {
    pageTitle: string = "Menu Component";
    menu: any[] = [];
}