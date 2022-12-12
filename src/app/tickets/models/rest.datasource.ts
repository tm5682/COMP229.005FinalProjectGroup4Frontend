import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of  } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { Tickets } from "./tickets.model";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";
import { environment } from "src/environments/environment";

const PROTOCOL = "http";
const PORT = 3000;


@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {        

        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`; //https://group4-comp229.herokuapp.com/

    }

    // Tickets
    getTicketsList(): Observable<Tickets[]> {

        return this.http.get<any>(this.baseUrl
            ).pipe(map(response => {
            return response.Tickets;
        }),
        catchError(error => {
            console.log(error.error);
            return of(error.error);
        })
        );;
    }

    insertTickets(item: Tickets): Observable<Tickets> {
        return this.http.post<string>(
                this.baseUrl + "tickets/add",
                item,
                this.provideToken()
            ).pipe(map(response => {
                return new ResponseModel(true, response);
            }),
            catchError(error => {
                console.log(error.error);
                return of(error.error);
            })
            );
    }

    updateTickets(item: Tickets): Observable<ResponseModel> {
        return this.http.put<string>(
                `${this.baseUrl}tickets/edit/${item._id}`,
                item,
                this.provideToken()
            ).pipe(map(response => {
                return new ResponseModel(true, response);
            }),
            catchError(error => {return of(error.error)})
            );
    }

    deleteTickets(id: string): Observable<ResponseModel> {
        return this.http.delete<string>(
                `${this.baseUrl}ickets/delete/${id}`,
                this.provideToken()
                ).pipe(map(response => {
                return new ResponseModel(true, response);
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
                return new ResponseModel(true, response);
            }),
            catchError(error => {return of(error.error)})
        );
    }

    signupUser(user: User, confirmPassword: String): Observable<ResponseModel> {
        const confirmedUser = {
            ...user,
            password_confirm: confirmPassword
        }
        return this.http.post<string>(this.baseUrl + "users/signup", confirmedUser)
            .pipe(map(response => {
                console.log(response)
                return new ResponseModel(true, response);
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