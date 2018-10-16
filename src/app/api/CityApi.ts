import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {City} from '../model/City';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

const CITY_URL = 'citys/';
const CITY_STARTSWITH_URL = 'citys/startsWith/';
@Injectable({
  providedIn: 'root'
})
export class CityApi {

  constructor(private http: HttpClient) {
  }

  getCityFromJson(jsonCity: object): City {
    return new City(jsonCity['id'], jsonCity['departmentCode'], jsonCity['name']);
  }

  findAll() {
    return this.http.get(`${environment.API_BASE_URL}${CITY_URL}`);
  }

  findById(id: number): Observable<City> {
    return this.http.get(`${environment.API_BASE_URL}${CITY_URL}${id}`).pipe(
      map(city => this.getCityFromJson(city))
    );
  }

  findAllStartsWith(start: string) {
    return this.http.get(`${environment.API_BASE_URL}${CITY_STARTSWITH_URL}${start}`);
  }
}
