import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Event} from '../model/Event';
import {EventApi} from '../api/EventApi';
import {ArtistApi} from '../api/ArtistApi';
import {Artist} from '../model/Artist';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public events$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  constructor(private eventApi: EventApi, private artistApi: ArtistApi) {
  }

  findAll() {
    return this.eventApi.findAll().subscribe(
      (events: Event[]) => {
        events.forEach(e => {
          this.artistApi.findById(e.artist_id).subscribe((a: Artist) => e.artist = a);
        });
        this.events$.next([...events]);
      }
    );
  }

  save(event) {
    return this.eventApi.save(event).subscribe(
      (ev: Event) => this.events$.next([ev, ...this.events$.getValue()]),
      (e) => {
        console.log(e);
      }
    );
  }

  addGuest(eventId, userId) {
    return this.eventApi.addGuest(eventId, userId).subscribe(
      (ev: Event) => ev
    );
  }
}
