import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of  } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { Tickets } from "./tickets.model";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";

const PROTOCOL = "http";
const PORT = 3000;


@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {        
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    // Tickets
    getTicketsList(): Observable<Tickets[]> {
        return this.http.get<Tickets[]>(this.baseUrl + "tickets/list");
    }

    insertTickets(item: Tickets): Observable<Tickets> {
        return this.http.post<Tickets>(
                this.baseUrl + "tickets/add",
                item,
                this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {
                console.log(error.error);
                return of(error.error);
            })
            );
    }

    updateTickets(item: Tickets): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(
                `${this.baseUrl}tickets/edit/${item._id}`,
                item,
                this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)})
            );
    }

    deleteTickets(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(
                `${this.baseUrl}ickets/delete/${id}`,
                this.provideToken()
                ).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)})
            );
    }

    
    // User endpoint of the API
    authenticate(user: string, pass: string): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "users/signin", 
        {
            username: user, 
            password: pass
        }).pipe(
            map(response => {
                // console.log(response);
                this.auth_token = response.success ? response.token : null;
                return response;
            }),
            catchError(error => {return of(error.error)})
        );
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", user)
            .pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    // Previously called getOptions()
    private provideToken() {
        return {
            headers: new HttpHeaders(
                {
                    "Authorization": `Bearer ${this.auth_token}`
                }
            )
        }
    }
}