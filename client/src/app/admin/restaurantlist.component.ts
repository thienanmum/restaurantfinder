import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../_services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {
  public restaurantList;

  constructor(private restaurantService: RestaurantService, private router: Router) {
   //route.params.subcribe(params=>{this.id=params['id']};)
   }

  ngOnInit() {
    
    this.restaurantService.getAllRestaurants().subscribe(
      data => {this.restaurantList = data}, err => console.log(err));;
   
   }

  navigateAdd(){
  this.router.navigate(['restaurant/0']);
  }
}
