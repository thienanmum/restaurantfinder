import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { User } from '../_models/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(user:User) {
    if (user._id === "") {
      return this.http.post(appConfig.apiUrl + 'users', user);
    } else {
      return this.http.put(appConfig.apiUrl + 'users/' + user._id, user);
    }
  }

  getUserById(userId:string) {
    return this.http.get(appConfig.apiUrl + 'users/' + userId);
  }

  getAllUsers() {
    return this.http.get(appConfig.apiUrl + 'users');
  }
}
