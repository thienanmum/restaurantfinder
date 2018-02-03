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

@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantdetail.component.css']
})
export class RestaurantdetailComponent implements OnInit {
  myForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'name': new FormControl('', [Validators.required]),
      'street': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
      'state': new FormControl('', [Validators.required]),
      'zip': new FormControl('', [Validators.required]),
      'detail': new FormControl('', [Validators.required])

    });
  };

  ngOnInit() {
  }

}
