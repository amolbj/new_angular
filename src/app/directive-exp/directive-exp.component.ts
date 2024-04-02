import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-exp',
  templateUrl: './directive-exp.component.html',
  styleUrls: ['./directive-exp.component.css']
})
export class DirectiveExpComponent {

  // isShow:boolean = true;
  // toggle(){
  //   this.isShow = !this.isShow
  // }

  // isShow:boolean = false;
  // toggle(){
  //   this.isShow = !this.isShow
  // }
  
//   isShow:boolean = false;
//   toggle(){
//     this.isShow = !this.isShow
//   }

courseList:string[] = ["angular", "react", "devops", ".net", "java"];

employeeList:any=[
  {empName:"rahul",designation:"angular dev", salary:40000},
  {empName:"raj",designation:"angular java", salary:50000},
  {empName:"sachin",designation:"angular .net", salary:60000},
  {empName:"raju",designation:"angular react", salary:70000}
]
}
