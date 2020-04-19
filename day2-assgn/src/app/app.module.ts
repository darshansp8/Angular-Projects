import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyservicedemoComponent } from './myservicedemo/myservicedemo.component';
import { GenderPipe } from './pipe/gender.pipe';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import {FormsModule} from '@angular/forms';
import { OrderByPipe } from './pipe/order-by.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './HttpCrud/users/users.component';
import { PostsComponent } from './HttpCrud/posts/posts.component';
import { AlbumsComponent } from './HttpCrud/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    MyservicedemoComponent,
    GenderPipe,
    PipedemoComponent,
    OrderByPipe,
    EmployeeComponent,
    UsersComponent,
    PostsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
