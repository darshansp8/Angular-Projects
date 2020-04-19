import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  rows = 5;
  public albums:any = [];
  model:any=[];
  model2:any = [];
  id:number;
  userId:number;
  title:number;
  constructor(private albumsService: EmployeeService) { }

  ngOnInit(): void {
    this.albumsService.getAlbumsApi()
      .subscribe(data => {
        this.albums = Array.from(Object.keys(data), k=>data[k]);
      });
  }

  deleteAlbumsById(id:number){
    this.albums.splice(id,1);
  }
  myValue:any;
  editAlbumsById(id:number){
    this.model2.id=this.albums[id].id;
    this.model2.userId=this.albums[id].userId;
    this.model2.title=this.albums[id].title;
    this.myValue=id; 
  }

  updateAlbums(){
    
    let id = this.myValue;
    for(let i = 0;i<this.albums.length;i++){
      if(i==id){
        this.albums[i]=this.model2;
        this.model2 = {};
      }
    }
  }

  addAlbums(){
    this.albums.push(this.model);
    this.model = {};
  }

}
