import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { UsersComponent } from './users/users.component';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CalculatorComponent, UsersComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
