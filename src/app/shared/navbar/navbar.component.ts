import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  isAuth: boolean = false;
  constructor(private auth: AuthService) {
    this.isAuth = !!this.auth.token;
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Productos', icon: 'pi pi-products', routerLink: '/products' },
      { label: 'Calculadora', icon: 'pi pi-plus', routerLink: '/calculator' },
      { label: 'Nosotros', icon: 'pi pi-download', routerLink: '/about' },
      this.isAuth
        ? { label: 'Usuarios', icon: 'pi pi-refresh', routerLink: '/users' }
        : {},
    ];
  }
}
