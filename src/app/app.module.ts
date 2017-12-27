import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const appRoutes = [{
		path :'cars',
		loadChildren: './modules/cars/cars.module#CarsModule'
	}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule,
    SharedModule
  ],
  exports: [ SharedModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
