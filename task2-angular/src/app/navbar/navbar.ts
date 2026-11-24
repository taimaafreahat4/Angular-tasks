import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
selectedpage="home";
changepage(page:string){
  this.selectedpage=page;
}

}
