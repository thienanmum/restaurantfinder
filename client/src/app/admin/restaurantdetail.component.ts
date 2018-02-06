/**
 * Filename: c:\Users\dnam8\Desktop\project\trunk\client\src\app\admin\restaurantdetail.component.ts
 * Path: c:\Users\dnam8\Desktop\project\trunk\client
 * Created Date: Monday, February 5th 2018, 7:56:30 pm
 * Author: KyNguyen
 * 
 * Copyright (c) 2018 Your Company
 */


import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  ReactiveFormsModule
} from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { RestaurantService } from '../_services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantdetail.component.css']
})

export class RestaurantdetailComponent implements OnInit {
  myForm: FormGroup;
  private subscription: Subscription;
  private id;
  private restaurantDetail;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) {
    // initial form with empty string
    this.myForm = formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'address': new FormGroup({
        'street': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'city': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'state': new FormControl('', [Validators.required, Validators.minLength(2)] ),
        'zip': new FormControl('', [Validators.required, Validators.minLength(3)]),
      }),
      'dishes': new FormControl('', [Validators.required,  Validators.minLength(3)])
    });
  };
  // Save/update restaurant detail from FORM
  save() {
    // split dish as seperated by comma and trim space 
    var dishes: String = this.myForm.value['dishes'];
    if (dishes.indexOf(",") !== -1) {
      dishes = this.myForm.value['dishes'].split(",").map(function (item) {
        return item.trim();
      });;
    }
    this.myForm.value['dishes'] = dishes;
    //if the id in URL is equal  it meant add new restaurant
    if (this.id == 0) {
      this.restaurantService.addRestaurant(this.myForm.value)
        .subscribe(data => { console.log("add new restaurant"); this.router.navigate(['restaurant']) }, err => console.log(err));
    // if the id is not equal 0 it mean update the restaurant
    } else {
      this.restaurantService.updateRestaurant(this.id, this.myForm.value)
        .subscribe(data => { console.log("update the old restaurant"); this.router.navigate(['restaurant']) }, err => console.log(err));
    }
  }

  // Load Restaurant detail into Form
  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
      this.id = param['id'];
      var dish: String ="";
      //load the restaurant detail into form, the id !=0 meant load existed restaurant info
      if (this.id !== "0") {
        this.restaurantService.getRestaurantById(this.id).subscribe(
          data => {
            this.restaurantDetail = data;
            //dishes is array and it is combine again after trim
            dish  += this.restaurantDetail.dishes;
            err => console.log(err);
            //set FORM value
            this.myForm.setValue({
              name: this.restaurantDetail.name,
              address: {
                street: this.restaurantDetail.address.street,
                city: this.restaurantDetail.address.city,
                state: this.restaurantDetail.address.state,
                zip: this.restaurantDetail.address.zip
              },
              dishes: dish
            });
          });
      }
    });
  }


  //delete the restaurant by id
  delete() {
    if (this.id !== "0") {
      this.restaurantService.deleteRestaurantById(this.id).subscribe(
        data => {
          this.router.navigate(['restaurant'])
        });
    }
  }

  //validator if add new restaurant the Delete button should not appear
  visbileDelete(): { [s: string]: boolean } {
    if (this.id == 0) return { error: true };
    return null;
  }

  // destroy subscription to release memory
  inOnDestroy() {
    this.subscription.unsubscribe();
  }

}
