import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'imprent', component: CalculatorComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildsRoutingModule {}
