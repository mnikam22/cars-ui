import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarsListingComponent } from './listing/listing.component';
import { CarsDetailsComponent } from  './details/details.component';

var carsRoutes = [{
		path :'',
		children:[{
			path: 'listing',
			component: CarsListingComponent
		},
		{
			path: 'details',
			component: CarsDetailsComponent
		}
	],
		component : CarsComponent
	}]
@NgModule({
  declarations: [
    CarsComponent,
		CarsListingComponent,
		CarsDetailsComponent
  ],
  imports: [
  	RouterModule.forChild(carsRoutes)
  ],
  exports:[RouterModule]
})
export class CarsModule { }
