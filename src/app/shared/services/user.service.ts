import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';
import { User } from '../models/user';

@Injectable()
export class UserService {
  selectedUser: User = new User();
  users: User[] = [];

  location = {
    lat: null,
    lon: null
  };

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    return this.http.get('/api/clients');
  }

  createUser(data: any) {
    data.location = this.location;
    data.createdOn = moment(new Date()).format('X');
    data.isAdmin = false;
    this.users.push(data);
  }

  isAdmin(emailId: string) {
    // return this.db.list('clients', ref =>
    //   ref.orderByChild('email').equalTo(emailId)
    // );
    return false;
  }

  updateUser(user: User) {
    // this.users.update(user.$key, user);
  }

  setLocation(lat: any, lon: any) {
    this.location.lat = lat;
    this.location.lon = lon;
  }
}
