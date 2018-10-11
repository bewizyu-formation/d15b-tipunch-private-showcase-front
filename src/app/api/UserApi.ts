import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {environment} from '../../environments/environment';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


const USERS_URL = 'users/';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  constructor(private http: HttpClient) {
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
