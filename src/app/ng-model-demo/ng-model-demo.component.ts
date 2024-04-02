import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model-demo',
  templateUrl: './ng-model-demo.component.html',
  styleUrls: ['./ng-model-demo.component.css']
})
export class NgModelDemoComponent {

  totalPrice:number = 0;
  price:number =0;
  quantity:number =0;

  calculateTotalPrice(){
    this.totalPrice = this.price * this.quantity;
  }
}
