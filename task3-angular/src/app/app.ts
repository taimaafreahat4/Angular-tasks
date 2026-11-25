import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('task3-angular');
  ProductNames = signal('Wireless Headphones');
descriptions = signal('Bluetooth Headphones');
prices = signal(120);
isavailables = signal(true);



  cartName = '';
  cartQuantity = 0;
  cartPrice = 0;

  receiveData(data: any) {
  this.cartName = data.name;
  this.cartQuantity = data.quantity;
  
  this.cartPrice=this.prices();

}


}
