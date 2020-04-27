import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  rows = 3;
  public test: any = [];
  trainer_id:number;
  trainer_name:string;
  technology_id:number;
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTrainersApi()
    .subscribe(data =>{
      this.test = Array.from(Object.keys(data), k =>data[k]);
      console.log(this.test);
    });
  }



}
