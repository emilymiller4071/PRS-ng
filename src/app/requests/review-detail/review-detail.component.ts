import { Component } from "@angular/core";

@Component({
    selector: 'review-detail',
    templateUrl: './review-detail.component.html'
})
export class ReviewDetailComponent {
    pageTitle: string = "Review Detail";
    products: any[] = [];
}