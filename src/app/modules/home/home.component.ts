import { Component , Renderer2, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: '',
  templateUrl: 'home.component.html'  
})
export class HomeComponent implements OnInit {
  title = 'app';
  constructor(private renderer : Renderer2){
    //this.renderer.addClass(document.body, 'm-listingsTwo');
  }

  ngOnInit(){
  	$(".b-slider").owlCarousel();
  }

  ngOnDestroy(){
    //this.renderer.removeClass(document.body, 'm-listingsTwo');
  }
}
