import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/model/line-item.class';
import { LineItemService } from 'src/app/service/line-items.service';
import { Request } from 'src/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Product } from 'src/model/product.class';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent implements OnInit{
  pageTitle: string = "Line Items List";
  lineItems: LineItem[] = [
    
      {
          "id": 1,
          "request": {
              "id": 1,
              "description": "staff snacks",
              "justification": "people get hungry",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-05-04T00:00:00",
              "dateNeeded": "2023-04-01",
              "status": "Review",
              "total": 450.0,
              "user": {
                  "id": 1,
                  "username": "emiller",
                  "password": "emilyIsCool",
                  "firstName": "Emily",
                  "lastName": "Rauch",
                  "phone": "859-555-1235",
                  "email": "emiller@mail.com",
                  "isReviewer": true,
                  "isAdmin": true
              }
          },
          "product": {
              "id": 8,
              "partNbr": "SNCK",
              "name": "snack mix",
              "price": 4.5,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 3,
                  "code": "MEI",
                  "name": "Meiyer",
                  "address": "555 Meiyer Drive",
                  "city": "Erlanger",
                  "state": "KY",
                  "zip": "41018",
                  "phone": "859-567-8901",
                  "email": "super@meiyer.com"
              }
          },
          "quantity": 100
      },
      {
          "id": 2,
          "request": {
              "id": 2,
              "description": "staff snacks",
              "justification": "people get hungry",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-05-04T00:00:00",
              "dateNeeded": "2023-04-05",
              "status": "Approved",
              "total": 0.0,
              "user": {
                  "id": 2,
                  "username": "dalan",
                  "password": "p@ssw0rd",
                  "firstName": "Dustin",
                  "lastName": "Alan",
                  "phone": "859-555-5678",
                  "email": "dustin@mail.com",
                  "isReviewer": true,
                  "isAdmin": true
              }
          },
          "product": {
              "id": 9,
              "partNbr": "SODA",
              "name": "soda pop",
              "price": 9.99,
              "unit": "12-pk",
              "photoPath": null,
              "vendor": {
                  "id": 3,
                  "code": "MEI",
                  "name": "Meiyer",
                  "address": "555 Meiyer Drive",
                  "city": "Erlanger",
                  "state": "KY",
                  "zip": "41018",
                  "phone": "859-567-8901",
                  "email": "super@meiyer.com"
              }
          },
          "quantity": 20
      },
      {
          "id": 3,
          "request": {
              "id": 3,
              "description": "staff snacks",
              "justification": "people get hungry",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-04-06",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 3,
                  "username": "ahatfield",
                  "password": "fieldhat23",
                  "firstName": "Amy",
                  "lastName": "Hatfield",
                  "phone": "859-555-9101",
                  "email": "ahatfield@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 10,
              "partNbr": "CND",
              "name": "chewy candy",
              "price": 20.99,
              "unit": "case",
              "photoPath": null,
              "vendor": {
                  "id": 3,
                  "code": "MEI",
                  "name": "Meiyer",
                  "address": "555 Meiyer Drive",
                  "city": "Erlanger",
                  "state": "KY",
                  "zip": "41018",
                  "phone": "859-567-8901",
                  "email": "super@meiyer.com"
              }
          },
          "quantity": 5
      },
      {
          "id": 4,
          "request": {
              "id": 4,
              "description": "staff snacks",
              "justification": "people get hungry",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-04-10",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 4,
                  "username": "caseycakes",
                  "password": "secretcode",
                  "firstName": "Casey",
                  "lastName": "Craiger",
                  "phone": "859-555-1112",
                  "email": "ccraiger@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 8,
              "partNbr": "SNCK",
              "name": "snack mix",
              "price": 4.5,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 3,
                  "code": "MEI",
                  "name": "Meiyer",
                  "address": "555 Meiyer Drive",
                  "city": "Erlanger",
                  "state": "KY",
                  "zip": "41018",
                  "phone": "859-567-8901",
                  "email": "super@meiyer.com"
              }
          },
          "quantity": 10
      },
      {
          "id": 5,
          "request": {
              "id": 5,
              "description": "staff snacks",
              "justification": "people get hungry",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-05-01T00:00:00",
              "dateNeeded": "2023-04-12",
              "status": "Approved",
              "total": 0.0,
              "user": {
                  "id": 5,
                  "username": "jmcanley",
                  "password": "JacAnley",
                  "firstName": "Jacob",
                  "lastName": "McAnley",
                  "phone": "859-555-1213",
                  "email": "jmcanley@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 10,
              "partNbr": "CND",
              "name": "chewy candy",
              "price": 20.99,
              "unit": "case",
              "photoPath": null,
              "vendor": {
                  "id": 3,
                  "code": "MEI",
                  "name": "Meiyer",
                  "address": "555 Meiyer Drive",
                  "city": "Erlanger",
                  "state": "KY",
                  "zip": "41018",
                  "phone": "859-567-8901",
                  "email": "super@meiyer.com"
              }
          },
          "quantity": 300
      },
      {
          "id": 6,
          "request": {
              "id": 6,
              "description": "supply room re-stock",
              "justification": "low on stock",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-04-30",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 6,
                  "username": "tmcdaniel",
                  "password": "mCted1985",
                  "firstName": "Ted",
                  "lastName": "McDaniel",
                  "phone": "859-555-1415",
                  "email": "tmcdaniel@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 4,
              "partNbr": "PNCL",
              "name": "pencils",
              "price": 8.25,
              "unit": "unit",
              "photoPath": null,
              "vendor": {
                  "id": 2,
                  "code": "TAR",
                  "name": "Targette",
                  "address": "7171 Houston Avenue",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41020",
                  "phone": "859-345-6789",
                  "email": "bullseye@targette.com"
              }
          },
          "quantity": 20
      },
      {
          "id": 7,
          "request": {
              "id": 7,
              "description": "office supplies",
              "justification": "ran out of a few things",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-05-01",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 7,
                  "username": "tferguson",
                  "password": "fergie",
                  "firstName": "Trent",
                  "lastName": "Ferguson",
                  "phone": "859-555-1617",
                  "email": "tferguson@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 5,
              "partNbr": "PEN",
              "name": "pens",
              "price": 12.0,
              "unit": "20 count",
              "photoPath": null,
              "vendor": {
                  "id": 2,
                  "code": "TAR",
                  "name": "Targette",
                  "address": "7171 Houston Avenue",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41020",
                  "phone": "859-345-6789",
                  "email": "bullseye@targette.com"
              }
          },
          "quantity": 200
      },
      {
          "id": 8,
          "request": {
              "id": 8,
              "description": "office supplies",
              "justification": "need to complete job requirements",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-05-07",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 8,
                  "username": "iokafor",
                  "password": "OkaIke",
                  "firstName": "Ike",
                  "lastName": "Okafor",
                  "phone": "859-555-1819",
                  "email": "iokafor@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 6,
              "partNbr": "WTO",
              "name": "white out",
              "price": 5.45,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 2,
                  "code": "TAR",
                  "name": "Targette",
                  "address": "7171 Houston Avenue",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41020",
                  "phone": "859-345-6789",
                  "email": "bullseye@targette.com"
              }
          },
          "quantity": 50
      },
      {
          "id": 9,
          "request": {
              "id": 9,
              "description": "supplies",
              "justification": "monthly supply re-stock",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-06-01",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 9,
                  "username": "msmith",
                  "password": "justLikeMike",
                  "firstName": "Mike",
                  "lastName": "Smith",
                  "phone": "859-555-2021",
                  "email": "msmith@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 7,
              "partNbr": "POS",
              "name": "post-its",
              "price": 7.99,
              "unit": "3-pk",
              "photoPath": null,
              "vendor": {
                  "id": 2,
                  "code": "TAR",
                  "name": "Targette",
                  "address": "7171 Houston Avenue",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41020",
                  "phone": "859-345-6789",
                  "email": "bullseye@targette.com"
              }
          },
          "quantity": 100
      },
      {
          "id": 10,
          "request": {
              "id": 10,
              "description": "supplies",
              "justification": "I need these items for my job",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-06-01",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 10,
                  "username": "speterson",
                  "password": "stevpet",
                  "firstName": "Steven",
                  "lastName": "Peterson",
                  "phone": "859-555-2223",
                  "email": "speterson@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 5,
              "partNbr": "PEN",
              "name": "pens",
              "price": 12.0,
              "unit": "20 count",
              "photoPath": null,
              "vendor": {
                  "id": 2,
                  "code": "TAR",
                  "name": "Targette",
                  "address": "7171 Houston Avenue",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41020",
                  "phone": "859-345-6789",
                  "email": "bullseye@targette.com"
              }
          },
          "quantity": 10
      },
      {
          "id": 11,
          "request": {
              "id": 11,
              "description": "uniforms",
              "justification": "new hire",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-05-05",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 11,
                  "username": "kmatthey",
                  "password": "Mattait",
                  "firstName": "Kait",
                  "lastName": "Matthey",
                  "phone": "859-555-2425",
                  "email": "kmatthey@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 1,
              "partNbr": "SHO",
              "name": "uniform shoes",
              "price": 35.97,
              "unit": "per pair",
              "photoPath": null,
              "vendor": {
                  "id": 1,
                  "code": "WAL",
                  "name": "Walburns",
                  "address": "1234 Walburns Ave",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41027",
                  "phone": "859-221-1234",
                  "email": "wallyworld@walburns.com"
              }
          },
          "quantity": 5
      },
      {
          "id": 12,
          "request": {
              "id": 12,
              "description": "uniforms",
              "justification": "I need these items for my job",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-07-01",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 12,
                  "username": "nlaw",
                  "password": "lawnick",
                  "firstName": "Nick",
                  "lastName": "Law",
                  "phone": "859-555-2627",
                  "email": "nlaw@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 1,
              "partNbr": "SHO",
              "name": "uniform shoes",
              "price": 35.97,
              "unit": "per pair",
              "photoPath": null,
              "vendor": {
                  "id": 1,
                  "code": "WAL",
                  "name": "Walburns",
                  "address": "1234 Walburns Ave",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41027",
                  "phone": "859-221-1234",
                  "email": "wallyworld@walburns.com"
              }
          },
          "quantity": 10
      },
      {
          "id": 13,
          "request": {
              "id": 13,
              "description": "uniforms",
              "justification": "my uniforms need replaced",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-07-08",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 13,
                  "username": "aballard",
                  "password": "ballan",
                  "firstName": "Annette",
                  "lastName": "Ballard",
                  "phone": "859-555-2829",
                  "email": "aballard@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 2,
              "partNbr": "SHI",
              "name": "uniform shirt",
              "price": 42.0,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 1,
                  "code": "WAL",
                  "name": "Walburns",
                  "address": "1234 Walburns Ave",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41027",
                  "phone": "859-221-1234",
                  "email": "wallyworld@walburns.com"
              }
          },
          "quantity": 5
      },
      {
          "id": 14,
          "request": {
              "id": 14,
              "description": "uniforms",
              "justification": "I need different sizes of uniform",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-07-10",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 14,
                  "username": "kapple",
                  "password": "appkel",
                  "firstName": "Kelsey",
                  "lastName": "Apple",
                  "phone": "859-555-3031",
                  "email": "kapple@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 3,
              "partNbr": "PNT",
              "name": "uniform pants",
              "price": 25.99,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 1,
                  "code": "WAL",
                  "name": "Walburns",
                  "address": "1234 Walburns Ave",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41027",
                  "phone": "859-221-1234",
                  "email": "wallyworld@walburns.com"
              }
          },
          "quantity": 20
      },
      {
          "id": 15,
          "request": {
              "id": 15,
              "description": "uniforms",
              "justification": "new uniform needed",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-07-13",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 15,
                  "username": "dbartick",
                  "password": "denbar",
                  "firstName": "Denise",
                  "lastName": "Bartick",
                  "phone": "859-555-3233",
                  "email": "dbartick@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 3,
              "partNbr": "PNT",
              "name": "uniform pants",
              "price": 25.99,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 1,
                  "code": "WAL",
                  "name": "Walburns",
                  "address": "1234 Walburns Ave",
                  "city": "Florence",
                  "state": "KY",
                  "zip": "41027",
                  "phone": "859-221-1234",
                  "email": "wallyworld@walburns.com"
              }
          },
          "quantity": 15
      },
      {
          "id": 16,
          "request": {
              "id": 16,
              "description": "office decor",
              "justification": "new hire needs desk",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-07-22",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 16,
                  "username": "knewkirk",
                  "password": "newkev",
                  "firstName": "Kevin",
                  "lastName": "Newkirk",
                  "phone": "859-555-3435",
                  "email": "knewkirk@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 11,
              "partNbr": "DEC",
              "name": "wall decor",
              "price": 50.0,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 4,
                  "code": "HOB",
                  "name": "Hobby Foyer",
                  "address": "7345 Hobby Street",
                  "city": "Independence",
                  "state": "KY",
                  "zip": "41017",
                  "phone": "859-123-4567",
                  "email": "thefoyer@hobbyfoyer.com"
              }
          },
          "quantity": 2
      },
      {
          "id": 17,
          "request": {
              "id": 17,
              "description": "office decor",
              "justification": "lobby renovation needed",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-07-30",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 17,
                  "username": "kpeace",
                  "password": "peakim",
                  "firstName": "Kim",
                  "lastName": "Peace",
                  "phone": "859-555-3637",
                  "email": "kpeace@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 12,
              "partNbr": "ORG",
              "name": "desk organizer",
              "price": 12.5,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 4,
                  "code": "HOB",
                  "name": "Hobby Foyer",
                  "address": "7345 Hobby Street",
                  "city": "Independence",
                  "state": "KY",
                  "zip": "41017",
                  "phone": "859-123-4567",
                  "email": "thefoyer@hobbyfoyer.com"
              }
          },
          "quantity": 10
      },
      {
          "id": 18,
          "request": {
              "id": 18,
              "description": "office decor",
              "justification": "water damage requires new decor",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-08-01",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 18,
                  "username": "theRadAddie",
                  "password": "raddison",
                  "firstName": "Addie",
                  "lastName": "Miller",
                  "phone": "859-555-3839",
                  "email": "arauch@mail.com",
                  "isReviewer": true,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 11,
              "partNbr": "DEC",
              "name": "wall decor",
              "price": 50.0,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 4,
                  "code": "HOB",
                  "name": "Hobby Foyer",
                  "address": "7345 Hobby Street",
                  "city": "Independence",
                  "state": "KY",
                  "zip": "41017",
                  "phone": "859-123-4567",
                  "email": "thefoyer@hobbyfoyer.com"
              }
          },
          "quantity": 5
      },
      {
          "id": 19,
          "request": {
              "id": 19,
              "description": "office decor",
              "justification": "updating foyer",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-08-03",
              "status": "New",
              "total": 0.0,
              "user": {
                  "id": 19,
                  "username": "dalexander",
                  "password": "alexandex",
                  "firstName": "Dex",
                  "lastName": "Alexander",
                  "phone": "859-555-4041",
                  "email": "dalexander@mail.com",
                  "isReviewer": false,
                  "isAdmin": false
              }
          },
          "product": {
              "id": 13,
              "partNbr": "DSK",
              "name": "desk",
              "price": 150.0,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 4,
                  "code": "HOB",
                  "name": "Hobby Foyer",
                  "address": "7345 Hobby Street",
                  "city": "Independence",
                  "state": "KY",
                  "zip": "41017",
                  "phone": "859-123-4567",
                  "email": "thefoyer@hobbyfoyer.com"
              }
          },
          "quantity": 1
      },
      {
          "id": 20,
          "request": {
              "id": 20,
              "description": "office decor",
              "justification": "new uniform needed",
              "rejectionReason": null,
              "deliveryMode": "Pickup",
              "submittedDate": "2023-03-15T00:00:00",
              "dateNeeded": "2023-08-15",
              "status": "New",
              "total": 0.0,
              "user": {
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
          },
          "product": {
              "id": 13,
              "partNbr": "DSK",
              "name": "desk",
              "price": 150.0,
              "unit": "each",
              "photoPath": null,
              "vendor": {
                  "id": 4,
                  "code": "HOB",
                  "name": "Hobby Foyer",
                  "address": "7345 Hobby Street",
                  "city": "Independence",
                  "state": "KY",
                  "zip": "41017",
                  "phone": "859-123-4567",
                  "email": "thefoyer@hobbyfoyer.com"
              }
          },
          "quantity": 5
      }
  ];
  
  lineItem!: LineItem;
  product!: Product;
  request!: Request;
  id: number = 0;

  constructor(private lineItemService: LineItemService,
    private requestService: RequestService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }


    ngOnInit() {
      this.lineItemService.getAll().subscribe(jsonResponse =>
        this.lineItems = jsonResponse as LineItem[]);
    }

    getById() {
      this.lineItemService.getById(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
    }

    delete() {
      this.lineItemService.delete(this.id).subscribe(jsonResponse =>
        this.lineItem = jsonResponse as LineItem);
    }

    getFormattedTotal(): string {
      const total = this.lineItem.quantity * this.lineItem.product.price;
      return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
}
