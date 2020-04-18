import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any=[];
  city:string;
  id:number;
  salary:number;
  name:string;
  model:any={};
  model2:any={}
  emp:any=[];

  constructor(private empService: EmployeeService) { 
    this.emp = empService.getEmployeesService();
  }

  ngOnInit(): void {
  }

  getAllEmployees():any[]{
    return this.emp;
  }

  getEmpById(id:number){
    console.log(id);
  }

  deleteEmpById(id:number){
    this.emp.splice(id,1);
  }
  myValue:any;
  editEmpById(id:number){
    this.model2.id=this.emp[id].id;
    this.model2.name=this.emp[id].name;
    this.model2.salary=this.emp[id].salary;
    this.model2.city=this.emp[id].city;
    this.myValue=id; 
  }

  updateEmp(){
    let id = this.myValue;
    for(let i = 0;i<this.emp.length;i++){
      if(i==id){
        this.emp[i]=this.model2;
        this.model2 = {};
      }
    }
  }

  addEmp(){
    this.emp.push(this.model);
    this.model = {};
  }
}
