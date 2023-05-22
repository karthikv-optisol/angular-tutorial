import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showMenu =false;
  isLoggedIn = false;

  ngOnInit():void
  {
    if(localStorage.getItem("token"))
    {
      this.isLoggedIn = true;
    }
  }

  toggleNavbar()
  {
   
     this.showMenu = !this.showMenu;
     console.log("clicked",this.showMenu);
  }

  handleLogout()
  {
     localStorage.clear();
     location.reload();
  }
}
