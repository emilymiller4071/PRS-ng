import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LineItemService } from "src/app/service/line-items.service";
import { RequestService } from "src/app/service/request.service";
import { LineItem } from "src/model/line-item.class";
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
    id: number;
    lineItems!: LineItem[];

    constructor(private requestService: RequestService,
        private lineItemService: LineItemService,
        private router: Router, 
        private route: ActivatedRoute) { }


    ngOnInit() {
        this.route.params.subscribe(params => this.id = params['id']);
        this.lineItemService.getByRequestId(this.id).subscribe(jsonResponse =>
            this.lineItems = jsonResponse as LineItem[]);
    }    


}