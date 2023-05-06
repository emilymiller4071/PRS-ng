import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/service/request.service";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";
import { Location } from "@angular/common";
import { DatePipe } from '@angular/common';

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


constructor(private requestService: RequestService,
    private location: Location, private datePipe: DatePipe) { }

    ngOnInit() {
        this.requestService.getAll().subscribe(
            requests => {
              this.requests = requests;
            })
    }
    create() {
        this.request.dateNeeded = this.datePipe.transform(this.request.dateNeeded, 'yyyy-MM-dd');
        this.requestService.create(this.request).subscribe(jsonResponse =>
            this.request = jsonResponse as Request);
            this.location.back();
    }
}