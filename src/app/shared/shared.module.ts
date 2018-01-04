import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CarsHeaderComponent } from './components/header/header.component';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [ CarsHeaderComponent ],
  imports: [RouterModule,CommonModule],
  exports: [ CarsHeaderComponent ],
  providers: [UserService]
})

export class SharedModule {  }