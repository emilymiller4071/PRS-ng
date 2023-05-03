import { User } from "src/model/user.class";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UserService {
    url: string = "http://localhost:8080/users";

    constructor(private http: HttpClient) { }

    //getAll => list
    getAll(): Observable<User[]> {
        return this.http.get(this.url) as Observable<User[]>;
    }

    //getById
    getById(id: number): Observable<User> {
        return this.http.get(this.url + "/" + id)as Observable<User>;
    }

    //create
    create(user: User): Observable<User> {
        return this.http.post(this.url, user) as Observable<User>;
    }

    //update
    update(user: User): Observable<User> {
        return this.http.put(this.url + "/", user) as Observable<User>;
    }

    //delete
    delete(id: number): Observable<User> {
        return this.http.delete(this.url + "/" + id) as Observable<User>;
    }

    //login
    login(user: User): Observable<User> {
        return this.http.post(this.url + "/login", user) as Observable<User>;
    }
}