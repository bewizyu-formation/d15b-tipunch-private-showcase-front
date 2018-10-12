import {Injectable} from '@angular/core';
import {DepartmentApi} from '../api/DepartmentApi';
import {Department} from '../model/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _department: Array<Department> = [];

  constructor(private departmentApi: DepartmentApi) {
  }

  findAll() {
    // return new Promise((resolve) => {
    //   this.departmentApi.findAll().subscribe(
    //     (deptArray: Array<Department>) => {
    //       this._department = deptArray;
    //
    //       resolve([...this._department]);
    //     });
    // });
    return this.departmentApi.findAll();
  }


  findByIDArray(idArray: number[]) {

  }

  get department(): Array<Department> {
    return this._department;
  }

}
