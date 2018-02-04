import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-restaurantsearch',
  templateUrl: './restaurantsearch.component.html',
  styleUrls: ['./restaurantsearch.component.css']
})
export class RestaurantsearchComponent implements OnInit {

  restaurants: Object;
  searchDishes: Array<string>;
  searchLocation: [number, number];

  constructor(private searchService: SearchService) { 
    
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.searchDishes);
    console.log(this.searchLocation);

    this.searchService.getRestaurants().subscribe(data => {
      this.restaurants = data;      
      console.log(this.restaurants);
    })
  }

}
