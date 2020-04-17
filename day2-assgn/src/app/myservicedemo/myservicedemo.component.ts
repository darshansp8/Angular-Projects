import { Component, OnInit } from '@angular/core';
import { DateserviceService } from '../dateservice.service';
 
@Component({
  selector: 'app-myservicedemo',
  templateUrl: './myservicedemo.component.html',
  styleUrls: ['./myservicedemo.component.css']
})
export class MyservicedemoComponent implements OnInit {
  date;
  constructor(private dateservice: DateserviceService) { }

  ngOnInit(): void {
    this.date = this.dateservice.showDate();
  }

}
