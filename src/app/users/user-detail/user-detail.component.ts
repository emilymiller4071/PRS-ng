import { Component, OnInit } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from "src/app/service/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
    pageTitle: string = "User Detail";
    user!: User;
    id: number = 0;
    
    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        //get the id from the url
        this.route.params.subscribe(params => this.id = params['id']);
        this.userService.getById(this.id).subscribe(jsonResponse =>
            this.user = jsonResponse as User);
    }    


    delete() {
        this.userService.delete(this.id).subscribe(jsonResponse =>
            this.router.navigateByUrl("user/list"));
    }
}