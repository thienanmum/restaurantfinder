/**
 * File: authentication.service.ts
 * File Created: 02/03/2018
 * Author: annguyen
 * Description: Authenticate the user by providing username and password.
 */

import { Injectable, EventEmitter } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';

import { User } from '../_models/user';
import { appConfig } from '../app.config';
import { generateAlertAction } from '../app.store';
import { IAppState } from '../app.store';

interface Credentials {username: string, password: string}

@Injectable()
export class AuthService {
    userChanged: EventEmitter<User> = new EventEmitter();
    get currentUser(): User {
        if (this.loggedIn()) {
            const token = localStorage.getItem('id_token');
            return this.jwtHelper.decodeToken(token)["_doc"];
        } else {
            return null;
        }
    }

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http: HttpClient, private router: Router, private ngRedux: NgRedux<IAppState>) { }

    login(credentials:Credentials) {
        this.http.post<{token:string}>(appConfig.apiUrl + 'users/authenticate', credentials)
            .subscribe(data => {                     
                    localStorage.setItem('id_token', data.token);
                    this.userChanged.emit(this.currentUser);
                    console.log("Login successfully: " + JSON.stringify(this.currentUser));
                    this.router.navigate(['home']);   
                    // this.ngRedux.dispatch(generateAlertAction(""));
                    // this.ngRedux.dispatch({type: "ACT_ALERT", data: ""});           
                }, 
                error => {
                    // this.ngRedux.dispatch(generateAlertAction("Invalid username or password."));
                    // this.ngRedux.dispatch({type: "ACT_ALERT", data: "Invalid username or password"});
                    console.log(error);                  
                });
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }

    logout() {
        localStorage.removeItem('id_token');
        this.userChanged.emit(null);
    }
}
