import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RestaurantsearchComponent } from './restaurantsearch/restaurantsearch.component';
import { LoginComponent } from './login/login.component';

const MAIN_ROUTES: Routes = [
    {path:"", redirectTo:'home', pathMatch:'full'},
    {path:"login", component:LoginComponent},
    {path:"home", component:HomeComponent},
    {path:"user/:id", component:UserComponent},
    {path:"restaurant/search", component: RestaurantsearchComponent},
    {path:"user/:id?", component:UserComponent}
]

export const mainRoutes = RouterModule.forRoot(MAIN_ROUTES);    