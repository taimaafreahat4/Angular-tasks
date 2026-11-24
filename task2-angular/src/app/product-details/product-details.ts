import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})


export class ProductDetails {
productName='laptop';
productDescription= 'High-performance laptop';
productPrice=750
productImage= '/laptop.jpg';
quantity=1
isAvailable=true
discountPercentage=10


increasequantity(){
  this.quantity++;
}
decreasquantity(){
  if(this.quantity>1){
    this.quantity--;
  }
}


getTotal() {
    return this.productPrice * this.quantity *
      (1 - this.discountPercentage / 100);
  }

  buyProduct() {
    alert('Thank you for buying ' + this.productName);
  }



}
