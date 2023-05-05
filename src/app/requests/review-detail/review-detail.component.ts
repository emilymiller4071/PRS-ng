import { Component } from "@angular/core";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";
import { RequestService } from "src/app/service/request.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-review-detail',
    templateUrl: './review-detail.component.html',
    styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent {
    pageTitle: string = "Review Detail";
    user!: User;
    request!: Request;
    id: number = 0;

    constructor(private requestService: RequestService,
        private router: Router,
        private route: ActivatedRoute) { }


    ngOnInit() {
        this.route.params.subscribe(params => this.id = params['id']);
        this.requestService.getById(this.id).subscribe(jsonResponse =>
            this.request = jsonResponse as Request);
    }  
    
    approve() {
        this.requestService.approve(this.request).subscribe(jsonResponse =>
            this.request = jsonResponse as Request);
    }

    reject() {
        this.requestService.reject(this.request).subscribe(jsonResponse =>
            this.request = jsonResponse as Request);
    }

    reopen() {
        this.requestService.reopen(this.request).subscribe(jsonResponse =>
            this.request = jsonResponse as Request);
    }
}



