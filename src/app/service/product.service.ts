import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/model/product.class";



@Injectable({
    providedIn: "root"
})

export class ProductService {
    url: string = "http://localhost:8080/products";
    constructor(private http: HttpClient) { }

    // used by product-list
    getAll(): Observable<Product[]> {
        return this.http.get(this.url) as Observable<Product[]>;
    }         
        
    // used by product-detail    '/products/:id'
    getById(id: number): Observable<Product> {
        return this.http.get(this.url + "/" + id) as Observable<Product>;
    }         

    // used by product-create
    create(product: Product): Observable<Product> {
        return this.http.post(this.url, product) as Observable<Product>;
    }

    // used by product-edit
    update(product: Product): Observable<Product>  {
        return this.http.put(this.url, product) as Observable<Product>;
    }

    // used by product-detail
    delete(id: number): Observable<Product> {
        return this.http.delete(this.url + "/" + id) as Observable<Product>
    }

}            