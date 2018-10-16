import {UserApi} from './api/UserApi';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import jwtDecode from 'jwt-decode';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

const USERS_URL = 'users/';
const LOGIN_URL = 'login/';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Observable<any>> {
  constructor(private userApi: UserApi, private cookieService: CookieService, private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const token = this.cookieService.get('tokenUser');
    const loginFromToken = jwtDecode(token)['sub'];
    return this.http.get(`${environment.API_BASE_URL}${USERS_URL}${LOGIN_URL}${loginFromToken}`).pipe(
      map((user) => this.userApi.getUserFromJson(user))
    );
  }
}
