import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // public employees = [];
  constructor() { }

  getEmployeesService(){
    return [
      {id:1, name:"Darshan", salary:345662, city:"Mumbai"},
      {id:2, name:"Manali", salary:23423.233, city:"Navi Mumbai"},
      {id:3, name:"Mayur", salary:13422.13, city:"Chiplun"},
      {id:4, name:"Harsh", salary:231342.131, city:"Pune"}
    ];
    // return this.employees;
  }
}
