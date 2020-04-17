import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  rows = 5;
  // temp:any;
  selectedFilter:any = "";
  sort: any = ["sortAscById","sortDescById","sortAscByName","sortDescByName"];
  constructor() { }

  ngOnInit(): void {

  }

  changeHandler(event: any){
    this.selectedFilter = event.target.value;
  }
  employees = [
    {id:104, name:"Darshan Sakpal", salary:273648, city:'Mumbai', age:22,gender:1, dob: new Date("May 5, 1997")},
    {id:101, name:"Manali Shinde", salary:373648, city:'Navi Mumbai', age:22,gender:2, dob: new Date("November 27, 1997")},
    {id:106, name:"Harshwardhan Thosar", salary:483648, city:'Pune', age:22,gender:1, dob: new Date("December 12, 1997")},
    {id:105, name:"Mayur Sonawale", salary:563648, city:'Satara', age:22,gender:3, dob: new Date("January 26, 1998")},
    {id:100, name:"Avanti Thool", salary:573648, city:'Nashik', age:22,gender:2, dob: new Date("March 13, 1997")},
    {id:103, name:"Vaishnavi Shinde", salary:443648, city:'Chiplun', age:22,gender:2, dob: new Date("August 14, 1997")},
    {id:102, name:"Payal Patil", salary:563648, city:'Kolhapur', age:22,gender:2, dob: new Date("September 15, 1997")}
  ];

  // sortAsc(){
  //   for(let i =0; i < this.employees.length; i++){
  //     for(let j =i+1; j < this.employees.length; j++){
  //       if(this.employees[i].id > this.employees[j].id){
  //         this.temp = this.employees[i].id;
  //         this.employees[i].id = this.employees[j].id;
  //         this.employees[j].id = this.temp;
  //       }
  //     }
  //   }
  // }

  // sortDesc(){
  //   for(let i =0; i < this.employees.length; i++){
  //     for(let j =i+1; j < this.employees.length; j++){
  //       if(this.employees[i].id < this.employees[j].id){
  //         this.temp = this.employees[i].id;
  //         this.employees[i].id = this.employees[j].id;
  //         this.employees[j].id = this.temp;
  //       }
  //     }
  //   }
  // }

  // sortAscByName(){
  //   for(let i =0; i < this.employees.length; i++){
  //     for(let j =i+1; j < this.employees.length; j++){
  //       if(this.employees[i].name > this.employees[j].name){
  //         this.temp = this.employees[i].name;
  //         this.employees[i].name = this.employees[j].name;
  //         this.employees[j].name = this.temp;
  //       }
  //     }
  //   }
  // }
}
