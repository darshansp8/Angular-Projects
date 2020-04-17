import { Pipe, PipeTransform } from '@angular/core';
import { typeSourceSpan } from '@angular/compiler';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array <any>, args?: any): any {
    let order =args;
    // console.log(typeof(order), order);
    return value.sort((a, b)=>{
      if( order == "sortAscById"){
        let current = a.id;
        let next = b.id;
        if( current< next){
          return -1;
        }
        else{
          return 1;
        }
        return 0;
      }
      else if( order == "sortDescById"){
        let current = a.id;
        let next = b.id;
        if(current > next){
          return -1;
        }
        else return 1;
        return 0;
      }
      if( order == "sortAscByName"){
        let current = a.name.toLowerCase();
        let next = b.name.toLowerCase();
        if( current< next){
          return -1;
        }
        else{
          return 1;
        }
        return 0;
      }
      if( order == "sortDescByName"){
        let current = a.name.toLowerCase();
        let next = b.name.toLowerCase();
        if( current > next){
          return -1;
        }
        else{
          return 1;
        }
        return 0;
      }
      
    });
  }

}
