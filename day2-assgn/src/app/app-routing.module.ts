import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MyservicedemoComponent } from './myservicedemo/myservicedemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { AlbumsComponent } from './HttpCrud/albums/albums.component';
import { PhotosComponent } from './HttpCrud/photos/photos.component';
import { PostsComponent } from './HttpCrud/posts/posts.component';
import { UsersComponent } from './HttpCrud/users/users.component';
import { AppComponent } from './app.component';
 
  
const routes: Routes = [
  {path: "employeedemo", component: EmployeeComponent},
  {path: "servicedemo", component: MyservicedemoComponent},
  {path: "pipedemo", component: PipedemoComponent},
  {path: "albums", component: AlbumsComponent},
  {path: "photos", component: PhotosComponent},
  {path: "posts", component: PostsComponent},
  {path: "users", component: UsersComponent},
  {path: "*", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
