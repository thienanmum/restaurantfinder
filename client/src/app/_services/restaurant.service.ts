import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAllRestaurants() {
    return this.http.get(appConfig.apiUrl + 'restaurants');
  }

  getRestaurantById(restaurantId: string) {
    return this.http.get(appConfig.apiUrl + 'restaurants/' + restaurantId);
  }

  addRestaurant(restaurant) {
    return this.http.post(appConfig.apiUrl + 'restaurants', restaurant);
  }

  updateRestaurant(restaurantId: string){

  }
}
