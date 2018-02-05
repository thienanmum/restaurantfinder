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
import {Subscription} from "rxjs/Rx";

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

    this.subscription = route.params.subscribe((param:any) => this.id = param['id']);
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
  
    if(this.id !=="0"){
     console.log(this.id)
    this.restaurantService.getRestaurantById(this.id).subscribe(
      data=>{
        console.log("return data");
        this.restaurantDetail = data; 
        err => console.log(err);
        console.log("return detail:" + this.restaurantDetail);
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
  }

  inOnDestroy(){
    this.subscription.unsubscribe();
  }

}
