import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';


@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { 
    
  }

  getRestaurants(dishes, location){
    console.log(!dishes);
    console.log(!location);
    //if(dishes != "undefined" && location != "undefined"){
    if(!dishes && !location){
      console.log(1);
      return this.http.get(appConfig.apiUrl + "restaurant/search/" + dishes + "/" + location); 
    }
    //else if(dishes != "undefined"){
    else if(!dishes){
      console.log(2);
      return this.http.get(appConfig.apiUrl + "restaurant/search/" + location); 
    }
    //else if(location != "undefined"){
    else if(!location){
      console.log(3);
      return this.http.get(appConfig.apiUrl + "restaurant/search/" + dishes); 
    }
    else{
      console.log(4);
      return this.http.get(appConfig.apiUrl + "restaurant/search"); 
    }
    
    
  }

}
