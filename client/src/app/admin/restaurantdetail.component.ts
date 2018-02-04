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
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantdetail.component.css']
})
export class RestaurantdetailComponent implements OnInit {
  myForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService, private router: Router) {
    this.myForm = formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'address': new FormGroup({
        'city': new FormControl('', [Validators.required]),
        'state': new FormControl('', [Validators.required]),
        'zip': new FormControl('', [Validators.required]),
      }),
      'dishes': new FormControl('', [Validators.required])
    });
  };

  save() {
    var dishes = this.myForm.value['dishes'].split(",").map(function (item) {
      return item.trim();
    });;
    this.myForm.value['dishes'] = dishes;
    this.restaurantService.addRestaurant(this.myForm.value)
      .subscribe(data => {console.log("return data"); this.router.navigate(['restaurant'])}, err => console.log(err));
  }
  ngOnInit() {
  }

}
