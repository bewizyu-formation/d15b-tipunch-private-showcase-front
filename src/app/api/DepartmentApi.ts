import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const DEPTARTMENT_URL = 'departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentApi {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(`${environment.API_BASE_URL}${DEPTARTMENT_URL}`);
  }

  findById(id: number) {
    return this.http.get(`${environment.API_BASE_URL}${DEPTARTMENT_URL}/${id}`);
  }

}
