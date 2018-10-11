import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const CITY_URL = 'citys/';

@Injectable({
  providedIn: 'root'
})
export class CityApi {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(`${environment.API_BASE_URL}${CITY_URL}`);
  }

  findById(id: number) {
    return this.http.get(`${environment.API_BASE_URL}${CITY_URL}${id}`);
  }
}
