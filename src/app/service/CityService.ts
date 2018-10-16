import {Injectable} from '@angular/core';
import {CityApi} from '../api/CityApi';
import {City} from '../model/City';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  public cities$: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);

  constructor(private cityApi: CityApi) {
  }

  findById(id: number) {
    return this.cityApi.findById(id);
  }

  findAllStartsWith(start: string) {
    return this.cityApi.findAllStartsWith(start).subscribe(
      (cities: City[]) => this.cities$.next(cities)
    );
  }
}
