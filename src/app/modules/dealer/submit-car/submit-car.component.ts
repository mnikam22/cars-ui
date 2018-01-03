import { Component , Renderer2, OnDestroy, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from 'jquery';
import * as toastr from 'toastr';
import 'block-ui';
declare var localStorage : any;

@Component({
  selector: '',
  templateUrl: 'submit-car.component.html'  
})

//API for cars make and and their models
//https://vpic.nhtsa.dot.gov/api/

export class DealerSubmitCarComponent implements OnDestroy {
 
  title = 'app';
  dealer:any = {};
  loginMsg:any = false;
  car:any = {};
  selectedModels = [];
  activeStep = 1 ;
  allmakes = ['Hyundai','BMW', 'Audi','Suzuki','Nissan','Toyota','Datsun','Volvo','Avanti','Volkswagen','Ford','Fiat','Mercedes-Benz','Rolls Royce','Jaguar','Ferrari','Bentley'];
  models = [{name : 'Creta',make: 'Hyundai'}, {name : 'Elantra', make: 'Hyundai'}, {name : 'Sonata', make: 'Hyundai'},{name : 'Accent', make: 'Hyundai'},{name : 'Santa Fe', make: 'Hyundai'},{name : 'Civic', make: 'Honda'},{name : 'Accord', make: 'Honda'},{name : 'Micra', make: 'Nissan'},{name : 'Stanza', make: 'Nissan'},{name : 'Axxess', make: 'Nissan'},{name : 'Altima', make: 'Nissan'},{name : 'S60', make: 'Volvo'},{name : 'S80', make: 'Volvo'},{name : 'Corolla', make: 'Toyota'},{name : 'PRIUS', make: 'Toyota'},{name : 'Avalon', make: 'Toyota'},{name : 'Camry', make: 'Toyota'},{name : 'Celica', make: 'Toyota'},{name : 'Passat', make: 'Volkswagen'},{name : 'Phaeton', make: 'Volkswagen'},{name : 'New GTI', make: 'Volkswagen'},{name : 'Elantra', make: 'Hyundai'},{name : 'Elantra', make: 'Hyundai'},{name : 'Elantra', make: 'Hyundai'},{name : 'Elantra', make: 'Hyundai'}];

  carSuccess = false;

  constructor(private renderer : Renderer2, private http: Http){
  	this.renderer.addClass(document.body, 'm-submit1');
  }

  nextTab(){

  }

  loadListings(){
    
  }

  ngAfterViewInit(){
    //toastr.info('Are you the 6 fingered man?');
    //$.blockUI();
    console.log($,"AfterViewInit called");
  }

  submitCar(data){
    console.log(data,"car submitted");
    let self = this;
    self.carSuccess = true;
  }

  selectDetails(attr,data){
    let self = this ;
    //console.log(self.car.make , "Model selected");    
    if(attr == 'make'){
      self.selectedModels = self.models.filter(function(mk){ return (mk.make == data )});
      console.log(self.selectedModels, "selectDetails called ");
    }
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'm-submit1');
  }

}
