import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public usersUrl: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getEmployeesService(){
    return [
      {id:1, name:"Darshan", salary:345662, city:"Mumbai"},
      {id:2, name:"Manali", salary:23423.233, city:"Navi Mumbai"},
      {id:3, name:"Mayur", salary:13422.13, city:"Chiplun"},
      {id:4, name:"Harsh", salary:231342.131, city:"Pune"}
    ];
    // return this.employees;
  }

  getUsersApi(): Observable<Users>{
    return this.http.get<Users>(this.usersUrl);
  }
}
