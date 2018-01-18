import { Component , Renderer2, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import * as $ from 'jquery';
//import 'owlcarousel';

@Component({
  selector: '',
  templateUrl: 'home.component.html'  
})
export class HomeComponent implements OnInit {
  title = 'app';
  carsResults = [];
  isSearchData = false ;
  constructor(private renderer : Renderer2){
    //this.renderer.addClass(document.body, 'm-listingsTwo');
  }

  ngOnInit(){
    	
  }

  ngAfterViewInit(){
    //$(".b-slider").owlCarousel();
  }
  onSearchChange(val){
    console.log(val, "val data");
    let self = this;
    self.isSearchData = true ;
    self.carsResults = [{
      name : "Honda clarity sedan",
      price: 32444
    },
    {
      name : "Honda Pilot SUV",
      price: 45712
    },
    {
      name : "Honda Civic",
      price: 36584
    }]
  }

  ngOnDestroy(){
    //this.renderer.removeClass(document.body, 'm-listingsTwo');
  }
}
