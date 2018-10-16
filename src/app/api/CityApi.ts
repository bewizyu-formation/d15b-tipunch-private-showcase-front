import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {City} from '../model/City';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

const CITY_URL = 'citys/';

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
}
