import { HttpClient } from "@angular/common/http";
import { Request } from "src/model/request.class";
import { Observable } from "rxjs";


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


    submitRequestForReview(request: Request): Observable<Request> {
        return this.http.post(this.url + "/review", request) as Observable<Request>;
    }
}

//             6) submitRequestForReview()
//                 a) /requests/review POST
//                 b) used by request-edit
//                     a) NOTE: We don't have a button for this yet, you'll create it before calling this method in the next step
//             7) approveRequest()
//                 a) /requests/:id/approve POST
//                 b) used by review-detail
//             8) rejectRequest()
//                 a) /requests/:id/reject POST
//                 b) used by review-detail
//             9) getRequestsByUserId()
//                 a) /requests/review/:id
//                 b) used by request-review