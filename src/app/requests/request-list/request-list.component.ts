import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/service/request.service";
import { Request } from "src/model/request.class";

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit{
    pageTitle: string = "Request List";
    requests: Request[] = [];


    constructor(private requestService: RequestService) { }


    ngOnInit() {
        this.requestService.getAll().subscribe(jsonResponse => {
            this.requests = jsonResponse as Request[];
        });
        
    }
}