import { Injectable } from "@angular/core";
import { LoginApi } from "../api/LoginApi";
import { Response } from "selenium-webdriver/http";

@Injectable({
    providedIn: 'root'
})
export class LoginService{

    constructor(private loginApi:LoginApi, ){}

    login(login:string, password:string){
        this.loginApi.login(login, password)
            .subscribe(data => {
                console.log(data.authorization);
            });
    }
}