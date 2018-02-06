// Author: ChauKy Nguyen
// ID: 986085
// Decription: component for details of Restaurant

import { Component, OnInit, NgZone } from '@angular/core';
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
import {Subscription} from "rxjs/Rx";
import { GeolocationService } from '../_services/geolocation.service';
import { Address } from '../_models/address';
import { Coordinates } from '../_models/coordinates';

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
  private location: Coordinates;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService, 
    private router: Router, private route: ActivatedRoute, 
    private geoService: GeolocationService, private zone: NgZone) {
    this.myForm = formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'address': new FormGroup({
        'street': new FormControl('', [Validators.required]),
        'city': new FormControl('', [Validators.required]),
        'state': new FormControl('', [Validators.required]),
        'zip': new FormControl('', [Validators.required]),
      }),
      'dishes': new FormControl('', [Validators.required])
    });

   
  };


// Save/update restaurant detail from FORM
  save() {
   
    var dishes: String = this.myForm.value['dishes'];
    if(dishes.indexOf(",") !== -1){
      dishes = this.myForm.value['dishes'].split(",").map(function (item) {
      return item.trim();
    });;
    }
    this.myForm.value['dishes'] = dishes;
    this.myForm.value['location'] = [this.location.longitude, this.location.latitude];
     if(this.id == 0){
        this.restaurantService.addRestaurant(this.myForm.value)
        .subscribe(data => {console.log("add new restaurant"); this.router.navigate(['restaurant'])}, err => console.log(err));
     }else{
        this.restaurantService.updateRestaurant(this.id, this.myForm.value)
        .subscribe(data => {console.log("update the old restaurant"); this.router.navigate(['restaurant'])}, err => console.log(err));
     }

  }

  // Load Restaurant detail into Form
  ngOnInit() {
     this.subscription = this.route.params.subscribe((param:any) => {
     this.id = param['id'];
     if(this.id !=="0"){
     console.log(this.id)
      this.restaurantService.getRestaurantById(this.id).subscribe(
      data=>{
        console.log("return data");
        this.restaurantDetail = data; 
        err => console.log(err);
       //load FORM value
        this.myForm.setValue({
          name: this.restaurantDetail.name,
          address: {
            street: this.restaurantDetail.address.street,
            city: this.restaurantDetail.address.city,
            state: this.restaurantDetail.address.state,
            zip: this.restaurantDetail.address.zip
          },
          dishes: this.restaurantDetail.dishes
          });
    });

   }
    });

    this.myForm.valueChanges.subscribe(data => {
        // console.log(data)
    });
    
  }


//delete the restaurant
delete(){
  if(this.id !=="0"){
     console.log(this.id);
     this.restaurantService.deleteRestaurantById(this.id).subscribe(
      data=>{
        console.log("Deleted restaurant with ID" + this.id);
        this.router.navigate(['restaurant'])
    });
  }
}

// destroy subscription to release memory
  inOnDestroy(){
    this.subscription.unsubscribe();
  }

  updateLocation() {
    const address = this.myForm.value.address;
    this.geoService.getLocation(new Address(address.street, address.city, 
        address.state, address.zip)).subscribe(loc => {
            this.zone.run(() => this.location = loc);
            console.log(loc);
        });
  }
}
