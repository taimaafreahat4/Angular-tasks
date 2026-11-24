import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  storename:string="electorshop";
  message:string="welcome to electorshop";
  StoreSlogan:string="Everything you need in one place";
  interpolation:string=""
}
