import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateserviceService {

  constructor() { }
  showDate(){
    let date = new Date();
    return date;
  }
}
