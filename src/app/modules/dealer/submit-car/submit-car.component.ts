import { Component , Renderer2, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";

import * as $ from 'jquery';
import * as toastr from 'toastr';
import 'block-ui';
import { ConfigurationService } from '../../../shared/services/configs/configs.service';

declare var localStorage : any;

@Component({
  selector: '',
  templateUrl: 'submit-car.component.html'  ,
  providers: [ConfigurationService]
})

//API for cars make and and their models
//https://vpic.nhtsa.dot.gov/api/

export class DealerSubmitCarComponent implements OnDestroy {
 
  title = 'app';
  dealer:any = {};
  loginMsg:any = false;
  car:any = {};
  selectedModels:any = [];
  activeStep = 1 ;
  allmakes:any= ['Hyundai','BMW', 'Audi','Suzuki','Nissan','Toyota','Datsun','Volvo','Avanti','Volkswagen','Ford','Fiat','Mercedes-Benz','Rolls Royce','Jaguar','Ferrari','Bentley'];

  models:any = [{name : 'Creta',make: 'Hyundai'}, {name : 'Elantra', make: 'Hyundai'}, {name : 'Sonata', make: 'Hyundai'},{name : 'Accent', make: 'Hyundai'},{name : 'Santa Fe', make: 'Hyundai'},{name : 'Civic', make: 'Honda'},{name : 'Accord', make: 'Honda'},{name : 'Micra', make: 'Nissan'},{name : 'Stanza', make: 'Nissan'},{name : 'Axxess', make: 'Nissan'},{name : 'Altima', make: 'Nissan'},{name : 'S60', make: 'Volvo'},{name : 'S80', make: 'Volvo'},{name : 'Corolla', make: 'Toyota'},{name : 'PRIUS', make: 'Toyota'},{name : 'Avalon', make: 'Toyota'},{name : 'Camry', make: 'Toyota'},{name : 'Celica', make: 'Toyota'},{name : 'Passat', make: 'Volkswagen'},{name : 'Phaeton', make: 'Volkswagen'},{name : 'New GTI', make: 'Volkswagen'},{name : 'Elantra', make: 'Hyundai'},{name : 'Elantra', make: 'Hyundai'},{name : 'Elantra', make: 'Hyundai'},{name : 'Elantra', make: 'Hyundai'}];

  carSuccess = false;

  constructor(private renderer : Renderer2, private http: HttpClient, private config: ConfigurationService){
  	this.renderer.addClass(document.body, 'm-submit1');
  }

  nextTab(){

  }

  loadListings(){
    
  }

  ngOnInit(){
    let self = this;
    self.http.get(self.config.getAPIUrl()+ "car/makes").subscribe(makes=>{
        self.allmakes = makes;
        console.log(makes, "data");
    },error=>{
        console.log(error, "error occured");
    })
  }

  ngAfterViewInit(){
    //toastr.info('Are you the 6 fingered man?');
    //$.blockUI();
  }

  submitCar(data){
    let self = this;
    self.carSuccess = true;
  }

  selectDetails(attr,data){
    let self = this ;
    if(attr == 'make'){
      self.http.get(self.config.getAPIUrl()+ "car/makes/models/"+data).subscribe(models=>{
          self.selectedModels = models;
          console.log(models, "models");
      },error=>{
          console.log(error, "error occured");
      });

      self.selectedModels = self.models.filter(function(mk){ return (mk.make == data )});
      console.log(self.selectedModels, "selectDetails called ");
    }
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'm-submit1');
  }

}
