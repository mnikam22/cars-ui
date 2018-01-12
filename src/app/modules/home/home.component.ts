import { Component , Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: '',
  templateUrl: 'home.component.html'  
})
export class HomeComponent implements OnDestroy {
  title = 'app';
  constructor(private renderer : Renderer2){
    //this.renderer.addClass(document.body, 'm-listingsTwo');
  }

  ngOnDestroy(){
    //this.renderer.removeClass(document.body, 'm-listingsTwo');
  }
}
