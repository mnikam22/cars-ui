import { Component , Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: '',
  templateUrl: 'listing.component.html'  
})
export class CarsListingComponent implements OnDestroy {
  title = 'app';
  constructor(private renderer : Renderer2){
    this.renderer.addClass(document.body, 'm-listingsTwo');
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'm-listingsTwo');
  }
}
