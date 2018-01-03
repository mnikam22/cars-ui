import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsHeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ CarsHeaderComponent ],
  imports: [RouterModule],
  exports: [ CarsHeaderComponent ]
})

export class SharedModule {  }