import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {
  public restaurantList;

  constructor(private restaurantService: RestaurantService) {
   
   }

  ngOnInit() {
    
    this.restaurantService.getAllRestaurants().subscribe(
      data => {this.restaurantList = data}, err => console.log(err));;
   
   }

  }

}
