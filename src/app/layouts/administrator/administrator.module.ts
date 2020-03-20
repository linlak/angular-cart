import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorComponent } from './administrator.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './administrator-routing.module';


@NgModule({
  declarations: [AdministratorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministratorModule { }
