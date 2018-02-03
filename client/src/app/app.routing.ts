import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const MAIN_ROUTES: Routes = [
    {path:"", redirectTo:'home', pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"user/:id?", component:UserComponent}
]

export const mainRoutes = RouterModule.forRoot(MAIN_ROUTES);    