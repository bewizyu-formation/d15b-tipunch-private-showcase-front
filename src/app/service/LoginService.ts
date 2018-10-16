import {Injectable} from '@angular/core';
import {LoginApi} from '../api/LoginApi';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private loginApi: LoginApi, private cookieService: CookieService, private router: Router) {}

    login(login: string, password: string) {
        this.loginApi.login(login, password)
            .subscribe((resp) => {
              this.storeJwtInCookie(resp.headers);
              // Redirection to home on success
              this.router.navigate(['home']);
            },
              // Redirection to login on error
              () => this.router.navigate(['login'])
            );
    }

    private storeJwtInCookie(headers) {
        headers.keys().forEach(k => {
            if (k === 'authorization') {
                this.cookieService.set('tokenUser', headers.get(k));
            }
        });
    }
}
