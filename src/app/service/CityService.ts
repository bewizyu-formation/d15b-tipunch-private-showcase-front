import {Injectable} from '@angular/core';
import {DepartmentApi} from '../api/DepartmentApi';
import {Department} from '../model/Department';
import {CityApi} from '../api/CityApi';
import { City } from '../model/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private cityApi: CityApi) {}

  findById(id: number) {
    return this.cityApi.findById(id);
  }

  findAllStartsWith(start: string){
    return  this.cityApi.findAllStartsWith(start).subscribe(
      (cities: City[]) => cities
    )
  }
}
