import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from "../model/LoginResponse";
import { Observable } from "rxjs";

const API_BASE_URL: string = 'http://localhost:8080/';
const API_LOGIN: string = 'login';

@Injectable({
    providedIn: 'root'
})
export class LoginApi{
    constructor(private http:HttpClient){}

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${API_BASE_URL}${API_LOGIN}`, {
          username,
          password,
        },
          {observe: 'response'}
        );
      }
}