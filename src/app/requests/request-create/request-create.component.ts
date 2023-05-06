import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/service/request.service";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";
import { Location } from "@angular/common";
import { DatePipe } from '@angular/common';
import { UserService } from "src/app/service/user.service";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
    selector: 'app-request-create',
    templateUrl: './request-create.component.html',
    styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit{
    pageTitle: string = "Request Create";
    user!: User;
    request: Request = new Request();
    requests: Request[];
    id: number = 0;


constructor(private requestService: RequestService,
    private router: Router) { }

    ngOnInit() {
       
    }
     
    create() {
        this.request.user.id = 1;
        // this.request.user.id = this.user.id;
        this.requestService.create(this.request).subscribe(jsonResponse =>
            this.request = jsonResponse as Request);
            this.router.navigateByUrl("/request/list");
        }
    }