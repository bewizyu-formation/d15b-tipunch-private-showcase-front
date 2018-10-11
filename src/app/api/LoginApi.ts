import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

const LOGIN_URL = 'login' ;

@Injectable({
    providedIn: 'root'
})
export class LoginApi {
    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${environment.API_BASE_URL}${LOGIN_URL}`, {
          username,
          password,
        },
          {observe: 'response'}
        );
      }
}
