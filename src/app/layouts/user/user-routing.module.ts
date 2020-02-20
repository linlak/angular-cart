import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserComponent } from './user.component';
import { AuthGuard } from 'src/app/shared/services/auth_gaurd';


export const userRoutes: Routes = [{
  path: '',
  component: UserComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      component: UserAccountComponent,
      outlet: 'profileOutlet'
    }
  ]
}];
