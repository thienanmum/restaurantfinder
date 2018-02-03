import { Component, OnInit } from '@angular/core';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-restaurantsearch',
  templateUrl: './restaurantsearch.component.html',
  styleUrls: ['./restaurantsearch.component.css']
})
export class RestaurantsearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
