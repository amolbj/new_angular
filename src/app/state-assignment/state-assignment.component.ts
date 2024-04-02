import { Component } from '@angular/core';

@Component({
  selector: 'app-state-assignment',
  templateUrl: './state-assignment.component.html',
  styleUrls: ['./state-assignment.component.css']
})
export class StateAssignmentComponent {

  states:any ={
    "Maharashtra":["mumbai","pune","nashik"],
    "Rajastan":["jaipur","jodpur"],
    "Madhyapradesh":["ïndore","Bhopal"]
  }
  statesList:string[]=[];
  districtList:string[]= [];
  selectedState:string = "";

  ngOnInit(){
    this.statesList = Object.keys(this.states);
  }
  getDistricts(){
    console.log(this.selectedState);
    this.districtList = this.states[this.selectedState];
  }
}
