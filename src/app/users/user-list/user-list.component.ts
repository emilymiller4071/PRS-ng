import { Component } from "@angular/core";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    pageTitle: string = "Users List";
    users: any[] = [
        {
            "id": 1,
            "firstName": "Emily",
            "lastName": "Miller",
            "phone": "859-555-1234",
            "email": "emiller@mail.com",
            "username": "emiller",
            "isReviewer": true,
            "isAdmin": true
          },
          {
            "id": 2,
            "firstName": "Dustin",
            "lastName": "Alan",
            "phone": "859-555-5678",
            "email": "dustin@mail.com",
            "userName": "dalan",
            "isReviewer": true,
            "isAdmin": true
          },
          {
            "id": 3,
            "firstName": "Amy",
            "lastName": "Hatfield",
            "phone": "859-555-9101",
            "email": "ahatfield@mail.com",
            "userName": "ahatfield",
            "isReviewer": true,
            "isAdmin": false
          },
          {
            "id": 4,
            "firstName": "Casey",
            "lastName": "Craiger",
            "phone": "859-555-1112",
            "email": "ccraiger@mail.com",
            "userName": "caseycakes",
            "isReviewer": true,
            "isAdmin": false
          },
          {
            "id": 5,
            "firstName": "Jacob",
            "lastName": "McAnley",
            "phone": "859-555-1213",
            "email": "jmcanley@mail.com",
            "userName": "jmcanley",
            "isReviewer": true,
            "isAdmin": false
          }
    ];
}