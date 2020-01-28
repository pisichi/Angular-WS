import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList:[]=[];

  constructor(private http: HttpClient) { }

  hello(){
    console.log("hello");
  }

  getEmployee(condition: any) {
    const params = new HttpParams({ fromObject: condition });
    return this.http
      .get<any[]>('/workshop-api/api/employee/queryEmployeeByCondition', {
        params
      });
  }
}
