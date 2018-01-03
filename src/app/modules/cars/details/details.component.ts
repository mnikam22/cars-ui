import { Component , Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: '',
  templateUrl: 'details.component.html'  
})
export class CarsDetailsComponent implements OnDestroy {
  title = 'app';
  constructor(private renderer : Renderer2){
    this.renderer.addClass(document.body, 'm-detail');
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'm-detail');
  }
}
