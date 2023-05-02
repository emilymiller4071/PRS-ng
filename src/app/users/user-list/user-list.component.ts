import { Component } from "@angular/core";
import { User } from "src/model/user.class";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    pageTitle: string = "Users List";
    users: User[] = [
        {
            "id": 1,
            "username": "emiller",
            "password": "emilyIsCool",
            "firstName": "Emily",
            "lastName": "Miller",
            "phone": "859-555-1234",
            "email": "emiller@mail.com",
            "isReviewer": true,
            "isAdmin": true
        },
        {
            "id": 2,
            "username": "dalan",
            "password": "p@ssw0rd",
            "firstName": "Dustin",
            "lastName": "Alan",
            "phone": "859-555-5678",
            "email": "dustin@mail.com",
            "isReviewer": true,
            "isAdmin": true
        },
        {
            "id": 3,
            "username": "ahatfield",
            "password": "fieldhat23",
            "firstName": "Amy",
            "lastName": "Hatfield",
            "phone": "859-555-9101",
            "email": "ahatfield@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 4,
            "username": "caseycakes",
            "password": "secretcode",
            "firstName": "Casey",
            "lastName": "Craiger",
            "phone": "859-555-1112",
            "email": "ccraiger@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 5,
            "username": "jmcanley",
            "password": "JacAnley",
            "firstName": "Jacob",
            "lastName": "McAnley",
            "phone": "859-555-1213",
            "email": "jmcanley@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 6,
            "username": "tmcdaniel",
            "password": "mCted1985",
            "firstName": "Ted",
            "lastName": "McDaniel",
            "phone": "859-555-1415",
            "email": "tmcdaniel@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 7,
            "username": "tferguson",
            "password": "fergie",
            "firstName": "Trent",
            "lastName": "Ferguson",
            "phone": "859-555-1617",
            "email": "tferguson@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 8,
            "username": "iokafor",
            "password": "OkaIke",
            "firstName": "Ike",
            "lastName": "Okafor",
            "phone": "859-555-1819",
            "email": "iokafor@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 9,
            "username": "msmith",
            "password": "justLikeMike",
            "firstName": "Mike",
            "lastName": "Smith",
            "phone": "859-555-2021",
            "email": "msmith@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 10,
            "username": "speterson",
            "password": "stevpet",
            "firstName": "Steven",
            "lastName": "Peterson",
            "phone": "859-555-2223",
            "email": "speterson@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 11,
            "username": "kmatthey",
            "password": "Mattait",
            "firstName": "Kait",
            "lastName": "Matthey",
            "phone": "859-555-2425",
            "email": "kmatthey@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 12,
            "username": "nlaw",
            "password": "lawnick",
            "firstName": "Nick",
            "lastName": "Law",
            "phone": "859-555-2627",
            "email": "nlaw@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 13,
            "username": "aballard",
            "password": "ballan",
            "firstName": "Annette",
            "lastName": "Ballard",
            "phone": "859-555-2829",
            "email": "aballard@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 14,
            "username": "kapple",
            "password": "appkel",
            "firstName": "Kelsey",
            "lastName": "Apple",
            "phone": "859-555-3031",
            "email": "kapple@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 15,
            "username": "dbartick",
            "password": "denbar",
            "firstName": "Denise",
            "lastName": "Bartick",
            "phone": "859-555-3233",
            "email": "dbartick@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 16,
            "username": "knewkirk",
            "password": "newkev",
            "firstName": "Kevin",
            "lastName": "Newkirk",
            "phone": "859-555-3435",
            "email": "knewkirk@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 17,
            "username": "kpeace",
            "password": "peakim",
            "firstName": "Kim",
            "lastName": "Peace",
            "phone": "859-555-3637",
            "email": "kpeace@mail.com",
            "isReviewer": true,
            "isAdmin": false
        },
        {
            "id": 18,
            "username": "arauch",
            "password": "raddison",
            "firstName": "Addie",
            "lastName": "Rauch",
            "phone": "859-555-3839",
            "email": "arauch@mail.com",
            "isReviewer": false,
            "isAdmin": false
        },
        {
            "id": 19,
            "username": "dalexander",
            "password": "alexandex",
            "firstName": "Dex",
            "lastName": "Alexander",
            "phone": "859-555-4041",
            "email": "dalexander@mail.com",
            "isReviewer": false,
            "isAdmin": false
        },
        {
            "id": 20,
            "username": "jeve",
            "password": "junigirl",
            "firstName": "Juniper",
            "lastName": "Eve",
            "phone": "859-555-4243",
            "email": "jeve@mail.com",
            "isReviewer": false,
            "isAdmin": false
        }
    ];
}