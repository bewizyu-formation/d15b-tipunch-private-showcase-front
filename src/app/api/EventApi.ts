import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Event } from '../model/Event';

const EVENTS_URL = 'events';

@Injectable({
  providedIn: 'root'
})
export class EventApi {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(`${environment.API_BASE_URL}${EVENTS_URL}`);
  }

  save(event: Event) {
    return this.http.post(`${environment.API_BASE_URL}${EVENTS_URL}`, {
      id: event.id,
      address: event.address,
      date_time: event.date_time,
      artist_id: event.artist_id,
      organizer_id: event.organizer_id,
    });
  }
}