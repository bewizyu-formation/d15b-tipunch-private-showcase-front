import {Injectable} from '@angular/core';
import {Artist} from '../model/Artist';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {environment} from '../../environments/environment';


const ARTIST_URL = 'artists/';

@Injectable({
    providedIn: 'root'
})
export class ArtistApi {

  constructor(private http: HttpClient ) {
  }
  save(artist: Artist)  {
    return this.http.post(`${environment.API_BASE_URL}${ARTIST_URL}`, artist);
  }

  findAll() {
    return this.http.get(`${environment.API_BASE_URL}${ARTIST_URL}`);
  }

  findById(id: number) {
    return this.http.get(`${environment.API_BASE_URL}${ARTIST_URL}${id}`);
  }

  update(artist: Artist) {
    return this.http.put(`${environment.API_BASE_URL}${ARTIST_URL}${artist.id}`, artist);
  }

  delete(artist: Artist) {
    return this.http.delete(`${environment.API_BASE_URL}${ARTIST_URL}${artist.id}`);
  }
}
