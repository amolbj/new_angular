import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  totalPrice:number = 0;
  price:number =0;
  quantity:number =0;

  calculatetotalPrice(){
    this.totalPrice = this.price * this.quantity;
  }
}
