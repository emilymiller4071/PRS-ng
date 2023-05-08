import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RequestService } from "src/app/service/request.service";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-request-review',
    templateUrl: './request-review.component.html',
    styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
    pageTitle: string = "Request Review";
    users: User[];
    request: Request = new Request();
    requests: Request[] = [];
    status: "";
    userId: number = 0;

    constructor(private requestService: RequestService,
        private router: Router, 
        private route: ActivatedRoute) { }


    ngOnInit() {
        // this.route.params.subscribe(params => this.userId = params['userId']);
        this.requestService.getAllForReview(this.userId).subscribe(jsonResponse =>
            this.requests = jsonResponse as Request[]);
    }    


}