import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "src/model/product.class";



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
           
           
           
            // 5) delete()
            //     1) /products/:id DELETE
            //     2) should navigate back to the list page
            //     3) in html, click of the button should call delete()
            //     4) used by product-detail

}            