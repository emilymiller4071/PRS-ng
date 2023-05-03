import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/service/user.service";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
    pageTitle: string = "User Edit";
    user!: User;
    id: number = 0;

    constructor(private userService: UserService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() { 
        this.route.params.subscribe(params => this.id = params['id']);
        this.userService.getById(this.id).subscribe(jsonResponse =>
            {this.user = jsonResponse as User});
    }
   update() {
    this.userService.update(this.user).subscribe(jsonResponse => {
        this.user = jsonResponse as User
    });
   }
}