import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RequestService } from "src/app/service/request.service";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-request-detail',
    templateUrl: './request-detail.component.html',
    styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
    pageTitle: string = "Request Detail";
    user!: User;
    request!: Request;
    id: number = 0;


    constructor(private requestService: RequestService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        //get the id from the url
        this.route.params.subscribe(params => this.id = params['id']);
        this.requestService.getById(this.id).subscribe(jsonResponse =>
            this.request = jsonResponse as Request);
    }    

    delete() {
        this.requestService.delete(this.id).subscribe(jsonResponse =>
            this.router.navigateByUrl("request/list"));
    }    
}