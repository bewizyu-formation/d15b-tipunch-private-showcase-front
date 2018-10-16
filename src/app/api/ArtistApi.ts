import {Injectable} from '@angular/core';
import {Artist} from '../model/Artist';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {environment} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

const ARTIST_URL = 'artists/';
const DEPARTMENT_URL = 'department/';

@Injectable({
  providedIn: 'root'
})
export class ArtistApi {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  save(artist: Artist) {
    return this.http.post(`${environment.API_BASE_URL}${ARTIST_URL}`, {
      login: artist.login,
      password: artist.password,
      email: artist.email,
      city: artist.city.id,
      artistName: artist.artistName,
      shortDescription: artist.shortDescription,
      artistEmail: artist.artistEmail,
    });
  }

  findAll() {
    return this.http.get(`${environment.API_BASE_URL}${ARTIST_URL}`);
  }

  findById(id: number) {
    return this.http.get(`${environment.API_BASE_URL}${ARTIST_URL}${id}`);
  }

  findAllByDeptCode(deptCode: string) {
    return this.http.get(`${environment.API_BASE_URL}${ARTIST_URL}${DEPARTMENT_URL}${deptCode}`);
  }

  update(artist: Artist) {
    return this.http.put(`${environment.API_BASE_URL}${ARTIST_URL}${artist.id}`, {
      login: artist.login,
      password: artist.password,
      email: artist.email,
      city: artist.city.id,
      artistName: artist.artistName,
      shortDescription: artist.shortDescription,
      artistEmail: artist.artistEmail,
    });
  }

  delete(artist: Artist) {
    return this.http.delete(`${environment.API_BASE_URL}${ARTIST_URL}${artist.id}`);
  }
}
