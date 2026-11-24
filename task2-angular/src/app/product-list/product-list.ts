import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

products=[{name:"laptop",description:"Description 1",price:100,image:"laptop.jpg",available:true},
          {name:"smartphone",description:"Description 2",price:200,image:"smartphone.jpg",available:true},
          {name:"headphones",description:"Description 3",price:300,image:"headphones.jpg",available:true},
          {name:"smartwatch",description: 'smartwatch',price: 45,image: 'smartwatch.jpg',available: false}
] 

buyProduct(productName: string) {
    alert('You selected: ' + productName);
  }




}
