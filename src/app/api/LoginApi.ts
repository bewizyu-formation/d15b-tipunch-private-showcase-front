import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from "../model/LoginResponse";

const API_BASE_URL: string = 'http://localhost:8080/';
const API_LOGIN: string = 'login';

@Injectable({
    providedIn: 'root'
})
export class LoginApi{
    constructor(private http:HttpClient){}

    login(login:string, password:string){
        return this.http.post<LoginResponse>(`${API_BASE_URL}${API_LOGIN}`, {login, password}, {observe: 'response'})
    }
}