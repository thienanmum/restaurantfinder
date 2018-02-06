/**
 * File: authentication.service.ts
 * File Created: 02/03/2018
 * Author: annguyen
 * Description: Authenticate the user by providing username and password.
 */

import { Injectable, EventEmitter } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { appConfig } from '../app.config';
import { Router } from '@angular/router';


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

    constructor(private http: HttpClient, private router: Router) { }

    login(credentials:Credentials) {
        this.http.post<{token:string}>(appConfig.apiUrl + 'users/authenticate', credentials)
            .subscribe(data => { 
                    console.log("Login successfully: " + JSON.stringify(this.currentUser));                    
                    localStorage.setItem('id_token', data.token);
                    this.userChanged.emit(this.currentUser);
                    this.router.navigate(['home']);                    
                }, 
                error => {
                    console.log(error);                      
                });
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }

    logout() {
        localStorage.removeItem('id_token');
    }
}
