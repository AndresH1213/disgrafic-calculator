import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Productos', icon: 'pi pi-products', routerLink: '/products' },
      { label: 'Calculadora', icon: 'pi pi-plus', routerLink: '/calculator' },
      { label: 'Usuarios', icon: 'pi pi-refresh', routerLink: '/users' },
      { label: 'Nosotros', icon: 'pi pi-download', routerLink: '/about' },
    ];
  }
}
