import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { ButtonModule } from 'primeng/button';

import { CalculatorComponent } from './calculator/calculator.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CalculatorComponent, UsersComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, ButtonModule],
})
export class PagesModule {}
