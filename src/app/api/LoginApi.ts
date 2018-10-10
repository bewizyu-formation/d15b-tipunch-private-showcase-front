import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE_URL = 'http://localhost:8080/';
const API_LOGIN = 'login';

@Injectable({
    providedIn: 'root'
})
export class LoginApi {
    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${API_BASE_URL}${API_LOGIN}`, {
          username,
          password,
        },
          {observe: 'response'}
        );
      }
}
