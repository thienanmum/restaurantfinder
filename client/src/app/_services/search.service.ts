import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { 
    
  }

  getRestaurants(){
    this.http.get("http://localhost:1234/search")    
    .subscribe(res => {
      console.log(res);
    })
    
  }

}
