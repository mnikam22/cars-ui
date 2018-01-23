import { Component , Renderer2, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../../../shared/services/configs/configs.service';

@Component({
  selector: '',
  templateUrl: 'listing.component.html' ,
  providers: [ConfigurationService] 
})
export class CarsListingComponent implements OnDestroy {
  title = 'app';
  searchListings:any = [];
  carsImages = ['aston.jpg', 'audi.jpg', 'jaguar.jpg', 'mers.jpg'];
  constructor(private renderer : Renderer2, private route: ActivatedRoute, private router: Router, private http : HttpClient, private config : ConfigurationService){
    this.renderer.addClass(document.body, 'm-listingsTwo');
  }

  ngOnInit(){
    let self = this ;
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        self.http.get(self.config.getAPIUrl()+ 'car/makes/models/'+params.make).subscribe(listings=>{
              console.log(listings, "listings");
              self.searchListings = listings;
        }, 
        error=>{
          console.log("error occured while getting listing");
        })

      });
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'm-listingsTwo');
  }
}
