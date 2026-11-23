import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('my-project2');

  // Part 2: Store Information

  storename: string = "ElectroShop";
  storedescription: string = "Your favorite electronics store";
  storeaddress: string = "Amman, Jordan";
  totalproducts: number = 12;
  isstoreopen: boolean = true;
  currency: string = "USD";

  productname:string[]=[
    "Laptop",
    "Smartphone",
    "Headphones",   
    "Smartwatch",
    "Keyboard",
  ]

   productPrices:number[]=[
    750,
    450,
    80,
    120,
    45
   ]


   featuredProduct:{ name: string; price: number; description: string } = {
    name: "Laptop",
    price: 750,
    description: "High-performance laptop for work and play"  }

    storestatus:string="";

    discountPercentage:number=10;
    finalprice:number=0


  totalNumberOfProducts: number = 0;
  mostExpensivePrice: number = 0;
  cheapestPrice: number = 0;
  totalProductsValue: number = 0;
    constructor(){
      if (this.isstoreopen){
        this.storestatus="Open";
      }
      else{
        this.storestatus="Closed";
      }

     
    if(this.discountPercentage>0){
      this.finalprice=this.productPrices[0]-(this.productPrices[0]*this.discountPercentage/100);
    }
    else{
      this.finalprice=this.productPrices[0];
    }

    //part6
    this.totalNumberOfProducts=this.productname.length;
    this.mostExpensivePrice=this.productPrices[0];
    this.cheapestPrice = this.productPrices[0];
    for (let price of this.productPrices){
      if(price>this.mostExpensivePrice){
        this.mostExpensivePrice=price;
      }
      if(price<this.cheapestPrice){
        this.cheapestPrice=price;
      }
      this.totalProductsValue+=price;
    }
  
  }
}
