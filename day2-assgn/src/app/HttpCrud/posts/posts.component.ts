import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  rows = 5;
  public posts = [];
  model:any = [];
  model2:any = [];
  userId:number;
  id:number;
  title:string;
  body:string;
  constructor(private postService: EmployeeService) { }

  ngOnInit(): void {
    this.postService.getPostsApi()
      .subscribe(data => {
        this.posts = Array.from(Object.keys(data), k=> data[k]);
        console.log(this.posts);
      });
  }

  // getAllUsers(){
  //   return this.posts;
  // }

  // getEmpById(id:number){
  //   console.log(id);
  // }

  deletePostById(id:number){
    this.posts.splice(id,1);
  }
  myValue:any;
  editPostById(id:number){
    this.model2.id=this.posts[id].id;
    this.model2.userId=this.posts[id].userId;
    this.model2.title=this.posts[id].title;
    this.model2.body=this.posts[id].body;
    this.myValue=id; 
  }

  updatePost(){
    
    let id = this.myValue;
    for(let i = 0;i<this.posts.length;i++){
      if(i==id){
        this.posts[i]=this.model2;
        this.model2 = {};
      }
    }
  }

  addPost(){
    this.posts.push(this.model);
    this.model = {};
  }

}
