import { Component, OnInit } from '@angular/core';
// import { Users } from 'src/app/interfaces/users';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = [];
  model:any =[];
  model2:any=[];
  id:number;
  name:string;
  username:string;
  email:string;
  constructor(private userService: EmployeeService) { }

  ngOnInit(): void {

    this.userService.getUsersApi()
      .subscribe(data => {
        this.users = Array.from(Object.keys(data), k=>data[k]);
        console.log(this.users);
      });
  }

  getAllUsers(){
    return this.users;
  }

  getEmpById(id:number){
    console.log(id);
  }

  deleteEmpById(id:number){
    this.users.splice(id,1);
  }
  myValue:any;
  editEmpById(id:number){
    this.model2.id=this.users[id].id;
    this.model2.name=this.users[id].name;
    this.model2.username=this.users[id].username;
    this.model2.email=this.users[id].email;
    this.myValue=id; 
  }

  updateEmp(){
    let id = this.myValue;
    for(let i = 0;i<this.users.length;i++){
      if(i==id){
        this.users[i]=this.model2;
        this.model2 = {};
      }
    }
  }

  addEmp(){
    this.users.push(this.model);
    this.model = {};
  }

}
