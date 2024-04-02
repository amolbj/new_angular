import { Component, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  firstName:string = "Lio";
  lastName:string = "Das";
  employeeObj:any ={
    companyName:"Film Industry",
    designation:"Super-Star"
  }
  // skills:string[] = ["Acting", "Directing", "Producing"]
  fbLink: string = "https://www.facebook.com/"
  Message: string = "Hello India";

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  isBtnDisabled: boolean = false;

  message: string = "Hello write me in capital";
  message1: string = "HELLO WRITE ME INN SMALL"

  // employeeObj: any = {
  //   comapanyName: "Microsoft",
  //   designation: "Software Developer",
  //   salary: 500000
  // }
  joinDate = new Date();
  income: number = 151511.005;
  totalPrice: number = 1904200;

  counter:number=0;
  myfun(){
    console.log("Click Event")
  }
  increment(){
    ++this.counter;
  }
  decrement(){
    --this.counter;
  }

  
  
}