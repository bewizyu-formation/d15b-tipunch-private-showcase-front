import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Event } from '../model/Event';
import { EventApi } from '../api/EventApi';
import { ArtistApi } from '../api/ArtistApi';
import { Artist } from '../model/Artist';

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
            events.forEach( e => {
                console.log('test');
                this.artistApi.findById(e.artist_id).subscribe((a: Artist) => {console.log('artist: '+a.artistName);e.artist = a});
            })
            this.events$.next([...events])
        }
    )
  }

  save(event: Event) {
    return this.eventApi.save(event);
  }
}
