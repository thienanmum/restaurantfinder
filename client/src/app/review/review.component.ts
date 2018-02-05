/**
 * File: review.component.ts
 * File Created: 02/05/2018
 * Author: annguyen
 * Description: Show all reviews of a restaurant and allow user to add new review
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
    @Input() reviews: any[];
    reviewForm: FormGroup;
    isEditing: boolean = false;

    constructor(private fb: FormBuilder, private authService: AuthService) { 
        this.reviewForm = fb.group({
            comment:[''],
            rating: [''],
        })
    }

    ngOnInit() {

    }

    addReview() {
        this.isEditing = true;
    }

    saveReview() {
        const review = this.reviewForm.value;
        console.log(review);
        review.username = this.authService.currentUser.username;
        if (!this.reviews) this.reviews = [];
        this.reviews.push(review);
        this.isEditing = false;
    }
}
