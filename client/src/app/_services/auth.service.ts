/**
 * File: authentication.service.ts
 * File Created: 02/03/2018
 * Author: annguyen
 * Description: Authenticate the user by providing username and password.
 */

import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { User } from '../_models/user';
import { appConfig } from '../app.config';


interface Credentials {username: string, password: string}

@Injectable()
export class AuthService {
    currentUser:User;

    constructor(private http: HttpClient) { }

    login(credentials:Credentials) {
        this.http.post(appConfig + 'user/authenticate', credentials)
            .map(res => res.json())
            .subscribe(data => localStorage.setItem('id_token', data), 
                error => console.log(error));
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }

    logout() {
        localStorage.removeItem('id_tokem');
    }
}
