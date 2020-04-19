import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public usersUrl: string = "https://jsonplaceholder.typicode.com/users";
  public postsUrl: string = "https://jsonplaceholder.typicode.com/posts";
  public albumsUrl: string = "https://jsonplaceholder.typicode.com/albums"; 
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

  getUsersApi(){
    return this.http.get(this.usersUrl);
  }

  getPostsApi(){
    return this.http.get(this.postsUrl);
  }

  getAlbumsApi(){
    return this.http.get(this.albumsUrl);
  }

}
