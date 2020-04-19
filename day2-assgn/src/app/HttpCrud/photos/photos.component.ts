import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  rows = 5;
  public photos:any = [];
  model:any = [];
  model2:any = [];
  albumId:number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;

  constructor(private photoService: EmployeeService) { }

  ngOnInit(): void {
    this.photoService.getPhotosApi()
      .subscribe(data => {
        this.photos = Array.from(Object.keys(data), k=> data[k]);
        console.log(this.photos);
      });
  }

  deleteAlbumsById(id:number){
    this.photos.splice(id,1);
  }
  myValue:any;
  editAlbumsById(id:number){
    this.model2.id=this.photos[id].id;
    this.model2.albumId=this.photos[id].albumId;
    this.model2.title=this.photos[id].title;
    this.model2.url=this.photos[id].url;
    this.model2.thumbnailUrl=this.photos[id].thumbnailUrl;
    this.myValue=id; 
  }

  updateAlbums(){
    
    let id = this.myValue;
    for(let i = 0;i<this.photos.length;i++){
      if(i==id){
        this.photos[i]=this.model2;
        this.model2 = {};
      }
    }
  }

  addAlbums(){
    this.photos.push(this.model);
    this.model = {};
  }

}
