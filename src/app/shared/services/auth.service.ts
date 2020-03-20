import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  userDetails: User = null;
  loggedUser;
  dbUser;
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.dbUser = new User();
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });
    this.user.next(this.getLoggedInUser());
  }

  isLoggedIn(): boolean {
    if (this.userDetails !== null) {
      return true;
    }
  }

  logout() {
    this.loggedUser = null;
  }

  createUserWithEmailAndPassword(emailID: string, password: string) {
  }

  getLoggedInUser(): User {
    const loggedUser: User = new User();
    loggedUser.avatar = '';
    loggedUser.createdOn = Date.now().toString();
    loggedUser.emailId = 'ugsalons@gmail.com';
    loggedUser.isAdmin = true;
    loggedUser.userName = 'linlak';
    loggedUser.phoneNumber = '256751921465';
    loggedUser.location = {
      lat: 123.34332,
      lon: 1432.9804
    };
    return loggedUser;
  }

  isAdmin(): boolean {
    const user = this.getLoggedInUser();
    if (user != null) {
      if (user.isAdmin === true) {
        return true;
      }
    }
  }

  signInRegular(email: string, password: string) {
  }

  signInWithGoogle() {
  }
}
