import { Component } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-two-way-db',
  templateUrl: './two-way-db.component.html',
  styleUrls: ['./two-way-db.component.css']
})
export class TwoWayDbComponent {

  cityName:string = "Mumbai";
  cityName1:string = "pune";

  cityChange(event:any){
    if(event && event.target.value){
      this.cityName = event.target.value;
    }
  }
  print(){
    console.log("cityName:" +this.cityName1)
  }
}
