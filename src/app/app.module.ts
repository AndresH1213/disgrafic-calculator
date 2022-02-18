import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './404/pagenotfound/pagenotfound.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AppComponent, PagenotfoundComponent, AuthComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
