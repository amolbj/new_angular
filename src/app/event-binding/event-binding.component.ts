import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  counter:number = 0;
  firstName:string = "";

  Myfun(){
    console.log("click event")
  }
  increment(){
    ++this.counter;
  }
  decrement(){
    --this.counter;
  }

  performAction(action:string){
    if(action == 'Increment'){
      ++this.counter;
    }else{
      --this.counter;
    }
  }
  printMessage(){
    console.log("Hello Indians");
  }
  productPrice:number =0;
  quantity:number =0;
  totalPrice:number=0;
  
  productPriceChange(event:any){
    console.log("product price change", event.target.value);
    if(event != null && event.target != null){
      this.productPrice = event.target.value;
      this.totalPrice = Number(this.productPrice)* Number(this.quantity)
    }
  }
  quantityChange(event:any){
    console.log("quantity change");
    if(event != null && event.target != null){
      this.quantity = event.target.value;
      this.totalPrice = Number(this.productPrice)* Number(this.quantity)
    }
  }

  fNameChange(event:any){

    console.log(event.target.value);
    this.firstName = event.target.value;
  }
}
