import { Component, OnInit } from "@angular/core";
import { User } from "src/model/user.class";
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
    pageTitle: string = "Users List";
    users: User[] = [];


  constructor(private userService: UserService) {}

  ngOnInit() {
    // subscribe to the list of users we get from the get request
    this.userService.getAll().subscribe(jsonResponse => {
      // add the data inside the returned JsonResponse to the array of users
      this.users = jsonResponse as User[];
    });
  }
}