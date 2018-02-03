import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {
  public restaurantList=[
    {id: 1, name: "BurgerKing", address: "12544 15s street", dishes:["Burger", "Coke"], rate: "good" },
    {id: 2, name: "Pizza Hutt", address: "23 15s street", dishes:["Pizza", "Coke"], rate: "good" },
    {id: 3, name: "Taco", address: "d 15s street", dishes:["Taco", "Coke"], rate: "good" },
    {id: 4, name: "McDonal", address: "232 15s street", dishes:["Taco", "Coke"], rate: "good" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
