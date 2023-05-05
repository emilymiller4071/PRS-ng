import { Component, OnInit } from "@angular/core";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";
import { RequestService } from "src/app/service/request.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-request-edit',
    templateUrl: './request-edit.component.html',
    styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit{
    pageTitle: string = "Request Edit";
    user!: User;
    request!: Request;
    id: number = 0;


    constructor(private requestService: RequestService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => this.id = params['id']);
        this.requestService.getById(this.id).subscribe(jsonResponse =>
            {this.request = jsonResponse as Request});
    }    

    update() {
        this.requestService.update(this.request).subscribe(jsonResponse => {
            this.request = jsonResponse as Request});
       }

    submitForReview() {
        this.requestService.submitForReview(this.request).subscribe(jsonRequest =>
            this.request = jsonRequest as Request);
    }
}