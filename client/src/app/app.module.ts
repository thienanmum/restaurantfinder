/**
 * File: app.module.ts
 * File Created: 02/03/2018
 * Author: annguyen
 * Description: Application main module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { mainRoutes } from './app.routing';
import { UserService } from './_services/user.service';
import { RestaurantsearchComponent } from './restaurantsearch/restaurantsearch.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RestaurantsearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, mainRoutes, HttpClientModule
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
