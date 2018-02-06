import { Component, OnInit } from '@angular/core';
import { Coordinates } from '../_models/coordinates';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../_services/restaurant.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-restaurantview',
    templateUrl: './restaurantview.component.html',
    styleUrls: ['./restaurantview.component.css']
})
export class RestaurantviewComponent implements OnInit {

    myForm: FormGroup;
    restaurant: any;
    restaurantId: string;

    constructor(private route: ActivatedRoute, private service: RestaurantService, private formBuilder: FormBuilder) {

        route.params.subscribe(params => { this.restaurantId = params['id'] });

        this.service.getRestaurantById(this.restaurantId).subscribe(data => {
            this.restaurant = data;

        })


    }

    ngOnInit() {

    }

}
