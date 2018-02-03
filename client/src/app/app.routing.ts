import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RestaurantsearchComponent } from './restaurantsearch/restaurantsearch.component';

const MAIN_ROUTES: Routes = [
    {path:"", redirectTo:'home', pathMatch:'full'},
    {path:"home", component:HomeComponent},
<<<<<<< HEAD
    {path:"user/:id", component:UserComponent}
=======
    {path:"search", component: RestaurantsearchComponent},
    {path:"user/:id?", component:UserComponent}
>>>>>>> bc0cf6ff38c98385c748737a7aa103f2302790c8
]

export const mainRoutes = RouterModule.forRoot(MAIN_ROUTES);    