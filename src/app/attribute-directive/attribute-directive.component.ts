import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent {

  employeeList:any = [
    {empName:"John",designation:"Angular Developer",salary:50000},
    {empName:"Sam",designation:"Java Developer",salary:60000},
    {empName:"Mike",designation:"React JS Developer",salary:70000},
    {empName:"David",designation:"Devops Eng",salary:80000},
 ]
}
