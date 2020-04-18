import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {id:1,name:"Darshan",age:22},
      {id:2,name:"Manali",age:21},
      {id:3,name:"Avanti",age:35},
      {id:4,name:"Ashish",age:40},
    ];
  }
}
