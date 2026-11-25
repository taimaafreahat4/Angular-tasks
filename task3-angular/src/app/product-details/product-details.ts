import { Component, signal, Input,Output,EventEmitter } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {

productName='Laptop';
Description="Dell Laptop, Core i7, 16GB RAM";
price=850;
isavailable=true;

quantity=signal(1);


increasequantity(){
  this.quantity.update(q=>q+1);
}

decreasequantity(){
  if(this.quantity()>1){
  this.quantity.update(q=>q-1);

  }

}

@Input() ProductNames:string="";
@Input() prices:number=0;
@Input() description: string = '';
@Input() isavailables: boolean = false;



@Output() addToCart = new EventEmitter<{
  name: string,
  quantity: number
}>();


sendToCart(){
  this.addToCart.emit({
    name:this.ProductNames,
    quantity:this.quantity()
  });
}
}
