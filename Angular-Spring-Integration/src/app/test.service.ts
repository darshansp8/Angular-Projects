import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public testUrl: string = "http://localhost:8087/trainers";
  public deleteUrl: string = "http://localhost:8087/delete/";
  constructor(private http: HttpClient) { }

  getTrainersApi(){
    return this.http.get(this.testUrl);
  }

  deleteTrainersApi(trainer_id){
    return this.http.delete(this.deleteUrl+trainer_id);
  }
}
