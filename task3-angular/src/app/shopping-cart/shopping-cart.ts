import { Component, signal, Input,Output,EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-shopping-cart',
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {


@Input() name: string = '';
@Input() quantity: number = 0;
@Input() price:number=0
}
