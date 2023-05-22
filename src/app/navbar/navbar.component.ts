import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbar =false;

  handleNavbar()
  {
   
     this.navbar = !this.navbar;
     console.log("clicked",this.navbar);
  }
}
