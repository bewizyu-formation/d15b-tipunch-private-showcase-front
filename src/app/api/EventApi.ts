import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Event } from '../model/Event';
import { CookieService } from 'ngx-cookie-service';

const EVENTS_URL = 'events';

@Injectable({
  providedIn: 'root'
})
export class EventApi {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  findAll() {
    return this.http.get(`${environment.API_BASE_URL}${EVENTS_URL}`);
  }

  save(event) {
    return this.http.post(`${environment.API_BASE_URL}${EVENTS_URL}`, event);
  }
}