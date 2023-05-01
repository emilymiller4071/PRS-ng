import { Component } from "@angular/core";
import { Request } from "src/model/request.class";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
    pageTitle: string = "Request List";
    users!: User;
    requests: Request[] = [
        {
            "id": 1,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-01T00:00:00",
            "status": "New",
            "total": 45,
            "userId": 1,
            "user": {
              "id": 1,
              "userName": "emiller",
              "password": "emilyIsCool",
              "firstName": "Emily",
              "lastName": "Miller",
              "phone": "859-555-1234",
              "email": "emiller@mail.com",
              "reviewer": true,
              "admin": true
            }
          },
          {
            "id": 2,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-05T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 2,
            "user": {
              "id": 2,
              "userName": "dalan",
              "password": "p@ssw0rd",
              "firstName": "Dustin",
              "lastName": "Alan",
              "phone": "859-555-5678",
              "email": "dustin@mail.com",
              "reviewer": true,
              "admin": true
            }
          },
          {
            "id": 3,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-06T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 3,
            "user": {
              "id": 3,
              "userName": "ahatfield",
              "password": "fieldhat23",
              "firstName": "Amy",
              "lastName": "Hatfield",
              "phone": "859-555-9101",
              "email": "ahatfield@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 4,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-10T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 4,
            "user": {
              "id": 4,
              "userName": "caseycakes",
              "password": "secretcode",
              "firstName": "Casey",
              "lastName": "Craiger",
              "phone": "859-555-1112",
              "email": "ccraiger@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 5,
            "description": "staff snacks",
            "justification": "people get hungry",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-12T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 5,
            "user": {
              "id": 5,
              "userName": "jmcanley",
              "password": "JacAnley",
              "firstName": "Jacob",
              "lastName": "McAnley",
              "phone": "859-555-1213",
              "email": "jmcanley@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 6,
            "description": "supply room re-stock",
            "justification": "low on stock",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-04-30T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 6,
            "user": {
              "id": 6,
              "userName": "tmcdaniel",
              "password": "mCted1985",
              "firstName": "Ted",
              "lastName": "McDaniel",
              "phone": "859-555-1415",
              "email": "tmcdaniel@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 7,
            "description": "office supplies",
            "justification": "ran out of a few things",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-05-01T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 7,
            "user": {
              "id": 7,
              "userName": "tferguson",
              "password": "fergie",
              "firstName": "Trent",
              "lastName": "Ferguson",
              "phone": "859-555-1617",
              "email": "tferguson@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 8,
            "description": "office supplies",
            "justification": "need to complete job requirements",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-05-07T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 8,
            "user": {
              "id": 8,
              "userName": "iokafor",
              "password": "OkaIke",
              "firstName": "Ike",
              "lastName": "Okafor",
              "phone": "859-555-1819",
              "email": "iokafor@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 9,
            "description": "supplies",
            "justification": "monthly supply re-stock",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-06-01T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 9,
            "user": {
              "id": 9,
              "userName": "msmith",
              "password": "justLikeMike",
              "firstName": "Mike",
              "lastName": "Smith",
              "phone": "859-555-2021",
              "email": "msmith@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 10,
            "description": "supplies",
            "justification": "I need these items for my job",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-06-01T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 10,
            "user": {
              "id": 10,
              "userName": "speterson",
              "password": "stevpet",
              "firstName": "Steven",
              "lastName": "Peterson",
              "phone": "859-555-2223",
              "email": "speterson@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 11,
            "description": "uniforms",
            "justification": "new hire",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-05-05T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 11,
            "user": {
              "id": 11,
              "userName": "kmatthey",
              "password": "Mattait",
              "firstName": "Kait",
              "lastName": "Matthey",
              "phone": "859-555-2425",
              "email": "kmatthey@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 12,
            "description": "uniforms",
            "justification": "I need these items for my job",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-07-01T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 12,
            "user": {
              "id": 12,
              "userName": "nlaw",
              "password": "lawnick",
              "firstName": "Nick",
              "lastName": "Law",
              "phone": "859-555-2627",
              "email": "nlaw@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 13,
            "description": "uniforms",
            "justification": "my uniforms need replaced",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-07-08T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 13,
            "user": {
              "id": 13,
              "userName": "aballard",
              "password": "ballan",
              "firstName": "Annette",
              "lastName": "Ballard",
              "phone": "859-555-2829",
              "email": "aballard@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 14,
            "description": "uniforms",
            "justification": "I need different sizes of uniform",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-07-10T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 14,
            "user": {
              "id": 14,
              "userName": "kapple",
              "password": "appkel",
              "firstName": "Kelsey",
              "lastName": "Apple",
              "phone": "859-555-3031",
              "email": "kapple@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 15,
            "description": "uniforms",
            "justification": "new uniform needed",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-07-13T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 15,
            "user": {
              "id": 15,
              "userName": "dbartick",
              "password": "denbar",
              "firstName": "Denise",
              "lastName": "Bartick",
              "phone": "859-555-3233",
              "email": "dbartick@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 16,
            "description": "office decor",
            "justification": "new hire needs desk",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-07-22T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 16,
            "user": {
              "id": 16,
              "userName": "knewkirk",
              "password": "newkev",
              "firstName": "Kevin",
              "lastName": "Newkirk",
              "phone": "859-555-3435",
              "email": "knewkirk@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 17,
            "description": "office decor",
            "justification": "lobby renovation needed",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-07-30T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 17,
            "user": {
              "id": 17,
              "userName": "kpeace",
              "password": "peakim",
              "firstName": "Kim",
              "lastName": "Peace",
              "phone": "859-555-3637",
              "email": "kpeace@mail.com",
              "reviewer": true,
              "admin": false
            }
          },
          {
            "id": 18,
            "description": "office decor",
            "justification": "water damage requires new decor",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-08-01T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 18,
            "user": {
              "id": 18,
              "userName": "arauch",
              "password": "raddison",
              "firstName": "Addie",
              "lastName": "Rauch",
              "phone": "859-555-3839",
              "email": "arauch@mail.com",
              "reviewer": false,
              "admin": false
            }
          },
          {
            "id": 19,
            "description": "office decor",
            "justification": "updating foyer",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-08-03T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 19,
            "user": {
              "id": 19,
              "userName": "dalexander",
              "password": "alexandex",
              "firstName": "Dex",
              "lastName": "Alexander",
              "phone": "859-555-4041",
              "email": "dalexander@mail.com",
              "reviewer": false,
              "admin": false
            }
          },
          {
            "id": 20,
            "description": "office decor",
            "justification": "new uniform needed",
            "rejectionReason": null,
            "deliveryMode": "Pickup",
            "submittedDate": "2023-03-15T00:00:00",
            "dateNeeded": "2023-08-15T00:00:00",
            "status": "New",
            "total": 0,
            "userId": 20,
            "user": {
              "id": 20,
              "userName": "jeve",
              "password": "junigirl",
              "firstName": "Juniper",
              "lastName": "Eve",
              "phone": "859-555-4243",
              "email": "jeve@mail.com",
              "reviewer": false,
              "admin": false
            }
          }
    ];
}