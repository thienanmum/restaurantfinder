import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { 
    
  }

  getRestaurants(){
    return this.http.get("http://localhost:3000/restaurant/search"); 
    
  }

}
