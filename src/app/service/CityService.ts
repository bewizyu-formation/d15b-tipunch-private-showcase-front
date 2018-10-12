import {Injectable} from '@angular/core';
import {DepartmentApi} from '../api/DepartmentApi';
import {Department} from '../model/Department';
import {CityApi} from '../api/CityApi';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private cityApi: CityApi) {}

  findById(id: number) {
    return this.cityApi.findById(id);
  }

}
