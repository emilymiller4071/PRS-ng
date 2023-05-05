import { Component } from "@angular/core";
import { RequestService } from "src/app/service/request.service";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-request-create',
    templateUrl: './request-create.component.html',
    styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
    pageTitle: string = "Request Create";
    user!: User;
    request!: Request;


constructor(private requestService: RequestService) { }

    create() {
        this.requestService.create(this.request).subscribe(jsonResponse =>
            this.request = jsonResponse as Request);
    } 
}