import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/model/product.class";
import { LineItem } from "src/model/line-item.class";



@Injectable({
    providedIn: "root"
})

export class LineItemService {
    url: string = "http://localhost:8080/request-lines";
    constructor(private http: HttpClient) { }

    // used by line-item-list
    getAll(): Observable<LineItem[]> {
        return this.http.get(this.url) as Observable<LineItem[]>;
    }         
        
    // used by line-item-detail    '/line-item/:id'
    getById(id: number): Observable<LineItem> {
        return this.http.get(this.url + "/" + id) as Observable<LineItem>;
    }         

    // used by line-item-create
    create(lineItem: LineItem): Observable<LineItem> {
        return this.http.post(this.url, lineItem) as Observable<LineItem>;
    }

    // used by line-item-edit
    update(lineItem: LineItem): Observable<LineItem>  {
        return this.http.put(this.url, lineItem) as Observable<LineItem>;
    }

    // used by line-item-detail
    delete(id: number): Observable<LineItem> {
        return this.http.delete(this.url + "/" + id) as Observable<LineItem>
    }

    getFormattedTotal(lineItem: LineItem): string {
        const total = lineItem.quantity * lineItem.product.price;
        return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      }

}  


// vi. line-item
// 1) list()
//     a) /requestlinesforrequest/:id GET
//     b) used by request-detail, request-edit, and review-detail
// 2) get()
//     a) /requestlines/:id GET
//     b) used by line-item-detail
//         a) We have not created this yet
// 3) save()
//     a) /requestlines POST
//     b) used by line-item-create
//         a) We have not created this yet
// 4) update()
//     a) /requestlines/:id PUT
//     b) used by line-item-edit
//         a) We have not created this yet
// 5) delete()
//     a) /requestlines/:id DELETE
//     b) in html click of the button should call delete()
//     c) used by line-item-edit and line-item-list
//         a) We have not created these yet