import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RestaurantsearchComponent } from './restaurantsearch/restaurantsearch.component';
import { RestaurantviewComponent } from './restaurantview/restaurantview.component';
import {RestaurantdetailComponent} from './admin/restaurantdetail.component';
import { RestaurantlistComponent } from './admin/restaurantlist.component';
import { LoginComponent } from './login/login.component';


const MAIN_ROUTES: Routes = [
    {path:"", redirectTo:'home', pathMatch:'full'},
    {path:"login", component:LoginComponent},
    {path:"home", component:HomeComponent},
    {path:"user/:id", component:UserComponent},
    {path:"restaurant/search", component: RestaurantsearchComponent},
    {path:"restaurant/search/view", component: RestaurantviewComponent},
    {path:"user/:id", component:UserComponent},
    {path:"restaurant/:id", component:RestaurantdetailComponent},
    {path:"restaurant", component:RestaurantlistComponent}
]

export const mainRoutes = RouterModule.forRoot(MAIN_ROUTES);    