import { HttpClient } from "@angular/common/http";
import { Vendor } from "src/model/vendor.class";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})

export class VendorService {

    url: string = "http://localhost:8080/vendors";
    constructor(private http: HttpClient) { }

    // used by vendor-list
    getAll(): Observable<Vendor[]> {
        return this.http.get(this.url) as Observable<Vendor[]>;
    }         
        
    // used by vendor-detail    '/vendors/:id'
    getById(id: number): Observable<Vendor> {
        return this.http.get(this.url + "/" + id) as Observable<Vendor>;
    }         

    // used by vendor-create
    create(vendor: Vendor): Observable<Vendor> {
        return this.http.post(this.url, vendor) as Observable<Vendor>;
    }

    // used by vendor-edit
    update(vendor: Vendor): Observable<Vendor>  {
        return this.http.put(this.url, vendor) as Observable<Vendor>;
    }

    // used by vendor-detail
    delete(id: number): Observable<Vendor> {
        return this.http.delete(this.url + "/" + id) as Observable<Vendor>
    }
}
