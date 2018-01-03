import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms'

const appRoutes = [{
		path :'cars',
		loadChildren: './modules/cars/cars.module#CarsModule'
  },
  {
		path :'dealer',
		loadChildren: './modules/dealer/dealer.module#DealerModule'
	}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule,
    SharedModule,
    FormsModule
  ],
  exports: [ SharedModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
