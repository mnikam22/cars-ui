import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarsListingComponent } from './listing/listing.component';

var carsRoutes = [{
		path :'',
		children:[{
			path: 'listing',
			component: CarsListingComponent
		}],
		component : CarsComponent
	}]
@NgModule({
  declarations: [
    CarsComponent,
    CarsListingComponent
  ],
  imports: [
  	RouterModule.forChild(carsRoutes)
  ],
  exports:[RouterModule]
})
export class CarsModule { }
