import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CascadeSelectModule } from 'primeng/cascadeselect';

import { CalculatorComponent } from './calculator/calculator.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagesComponent,
    CalculatorComponent,
    UsersComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    CascadeSelectModule,
  ],
})
export class PagesModule {}
