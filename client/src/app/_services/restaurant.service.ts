// Author: ChauKy Nguyen
// ID: 986085
// Decription: services for CRUD restaurant

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

//get all restaurants
  getAllRestaurants() {
    return this.http.get(appConfig.apiUrl + 'restaurants');
  }

//get the restaurant by ID
  getRestaurantById(restaurantId: string) {
    return this.http.get(appConfig.apiUrl + 'restaurants/' + restaurantId);
  }

//delete the restaurant by ID
  deleteRestaurantById(restaurantId){
    return this.http.delete(appConfig.apiUrl + 'restaurants/' + restaurantId);
  }

  //add new restaurant
  addRestaurant(restaurant) {
    return this.http.post(appConfig.apiUrl + 'restaurants', restaurant);
  }

//update restaurant
  updateRestaurant(restaurantId: string, restaurant: String){
    return this.http.put(appConfig.apiUrl + 'restaurants/' + restaurantId, restaurant);
  }
}
