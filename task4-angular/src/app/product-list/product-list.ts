import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  orderStatus = 'Pending';

  selectedCategory = 'All Products';

  products = signal([
    {id: 1, name: 'Laptop', price: 850, category: 'Electronics', isAvailable: true, discount: 15, image:'product.image/laptoop.avif'},

    {id: 2, name: 'Smartphone', price: 450, category: 'Electronics', isAvailable: true, discount: 0, image: 'product.image/phone.jpg'},

    {id: 3, name: 'Headphones', price: 120, category: 'Accessories', isAvailable: false, discount: 10, image: 'headphones.jpg'},

    {id: 4, name: 'Smart Watch', price: 180, category: 'Accessories', isAvailable: true, discount: 20, image: 'watch.jpg'},

    {id: 5, name: 'Tablet', price: 300, category: 'Electronics', isAvailable: false, discount: 5, image: 'tablet.jpg'},

    {id: 6, name: 'Keyboard', price: 65, category: 'Accessories', isAvailable: true, discount: 0, image: 'product.image/Keyboard.jpg'},

    {id: 7, name: 'Gaming Mouse', price: 45, category: 'Accessories', isAvailable: true, discount: 10, image: 'mouse.jpg'},

    {id: 8, name: 'Monitor', price: 220, category: 'Electronics', isAvailable: false, discount: 0, image: 'monitor.jpg'}
  ]);

}