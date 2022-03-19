import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator/calculator.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ModalCalculadorIntroComponent } from './components/modal-calculador-intro/modal-calculador-intro.component';
import { FormWorkLaborComponent } from './components/form-work-labor/form-work-labor.component';
import { PrimengModule } from './primeng.module';

@NgModule({
  declarations: [
    PagesComponent,
    CalculatorComponent,
    UsersComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ModalCalculadorIntroComponent,
    FormWorkLaborComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
})
export class PagesModule {}
