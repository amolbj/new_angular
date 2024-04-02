import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.css']
})
export class DirectiveNgforComponent {

  // employeeList = [
  //   {empName:"rohit", designation:".net developer" ,salary:40000},
  //   {empName:"amol", designation:"react developer" ,salary:50000},
  //   {empName:"ram", designation:" angular developer" ,salary:60000},
  //   {empName:"sandeep", designation:"java developer" ,salary:70000}
  // ]

  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
    selectedValue: string= 'One';  
}
class item {  
  name: string | undefined;  
  val: number | undefined;  
}  
