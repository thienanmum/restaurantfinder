import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: string;
  userForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.userId = param.id;
      if (this.userId && this.userId != '0') {
        this.userService.getUserById(this.userId).subscribe(user => {
          this.userForm.setValue(user);
        });
      }
    })
  }

  onSubmit() {
    console.log(this.userForm);
    this.userService.saveUser(this.userForm.value).subscribe(success => {
      this.router.navigate(['home'])
    }, error => {console.log(error)});
  }
}
