import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_services/search.service';
import { AgmCoreModule } from '@agm/core';
import { GeolocationService } from '../_services/geolocation.service';
import { Coordinates } from '../_models/coordinates';

@Component({
  selector: 'app-restaurantsearch',
  templateUrl: './restaurantsearch.component.html',
  styleUrls: ['./restaurantsearch.component.css']
})
export class RestaurantsearchComponent implements OnInit {

  restaurants: Object;
  searchDishes: Array<string>;
  searchAddress: string; 
  currentCord: Coordinates;
  
  constructor(private searchService: SearchService, private geoService: GeolocationService) { 
    this.geoService.getCurrentLocation().subscribe(cord =>{      
      this.currentCord = new Coordinates({
           latitude: cord.latitude,
           longitude: cord.longitude,
           accuracy: 20
      }) ;      
    })
  }

  ngOnInit() {
    
  }

  onSubmit(){   
    this.searchService.getRestaurants(this.currentCord.longitude, this.currentCord.latitude, this.searchDishes).subscribe(data => {     
      this.restaurants = data;      
    })
  }

}
