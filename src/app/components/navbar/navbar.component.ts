import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isActive = "Home"
  navLinks = [
    { label: 'Home', route: '/dashboard' },
    { label: 'Hotels', route: '/rooms' },
    { label: 'Deals', route: '/deals' },
    { label: 'Contact', route: '/contact' },
  ];
}
