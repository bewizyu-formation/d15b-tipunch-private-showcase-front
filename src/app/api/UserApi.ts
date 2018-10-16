import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {environment} from '../../environments/environment';

import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {CityApi} from './CityApi';
import {City} from '../model/City';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


const USERS_URL = 'users/';
const LOGIN_URL = 'login/';


@Injectable({
  providedIn: 'root'
})
export class UserApi {

  constructor(private http: HttpClient, private cookieService: CookieService, private cityApi: CityApi) {
  }

  getUserFromJson(jsonUser: object): Observable<User> {
    return this.cityApi.findById(jsonUser['city']).pipe(
      map(city => new User(jsonUser['id'], jsonUser['login'], jsonUser['password'], jsonUser['email'], city))
    );
  }

  save(user: User) {
    return this.http.post(`${environment.API_BASE_URL}${USERS_URL}`, user);
  }

  findAll() {
    return this.http.get(`${environment.API_BASE_URL}${USERS_URL}`);
  }

  findById(id: number) {
    return this.http.get(`${environment.API_BASE_URL}${USERS_URL}${id}`);
  }

  update(user: User) {
    return this.http.put(`${environment.API_BASE_URL}${USERS_URL}${user.id}`, user);
  }

  delete(user: User) {
    return this.http.delete(`${environment.API_BASE_URL}${USERS_URL}${user.id}`);
  }
}
