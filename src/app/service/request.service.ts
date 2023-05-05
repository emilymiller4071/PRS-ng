import { HttpClient } from "@angular/common/http";
import { Request } from "src/model/request.class";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})

export class RequestService {
    
    url: string = "http://localhost:8080/requests";
    constructor(private http: HttpClient) { }

    // used by request-list
    getAll(): Observable<Request[]> {
        return this.http.get(this.url) as Observable<Request[]>;
    }         
        
    // used by request-detail    '/vendors/:id'
    getById(id: number): Observable<Request> {
        return this.http.get(this.url + "/" + id) as Observable<Request>;
    }         

    // used by request-create
    create(request: Request): Observable<Request> {
        return this.http.post(this.url, request) as Observable<Request>;
    }

    // used by request-edit
    update(request: Request): Observable<Request>  {
        return this.http.put(this.url, request) as Observable<Request>;
    }

    // used by request-detail
    delete(id: number): Observable<Request> {
        return this.http.delete(this.url + "/" + id) as Observable<Request>
    }

    // used by request-edit
   // a) NOTE: We don't have a button for this yet, you'll create it before calling this method in the next step
    submitForReview(request: Request): Observable<Request> {
        return this.http.put(this.url + "/review", request) as Observable<Request>;
    }
    
    // used by review-detail
    approve(request: Request): Observable<Request> {
        return this.http.put(this.url + "/approve", request) as Observable<Request>;
    }

    // used by review-detail
    reject(request: Request): Observable<Request> {
        return this.http.put(this.url + "/reject", request) as Observable<Request>;
    }

    // used by review-detail
    reopen(request: Request): Observable<Request> {
        return this.http.put(this.url + "/reopen", request) as Observable<Request>;
    }

    // used by request-review
    getAllForReview(userId: number): Observable<Request[]> {
        return this.http.get(this.url + "/list-review" + userId) as Observable<Request[]>;
    }
}
