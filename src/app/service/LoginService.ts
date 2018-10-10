import { Injectable } from '@angular/core';
import { LoginApi } from '../api/LoginApi';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private loginApi: LoginApi, private cookieService: CookieService ) {}

    login(login: string, password: string) {
        this.loginApi.login(login, password)
            .subscribe(resp => this.storeJwtInCookie(resp.headers));
    }

    private storeJwtInCookie(headers) {
        headers.keys().forEach(k => {
            if (k === 'authorization') {
                this.cookieService.set('tokenUser', headers.get(k));
            }
        });
    }
}
