import { Routes } from '@angular/router';
import { AdministratorComponent } from './administrator.component';


export const adminRoutes: Routes = [
  {
    path: '',
    component: AdministratorComponent,
    children: []
  }
];

