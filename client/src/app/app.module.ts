import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { mainRoutes } from './app.routing';
import { RestaurantsearchComponent } from './restaurantsearch/restaurantsearch.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RestaurantsearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, mainRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
