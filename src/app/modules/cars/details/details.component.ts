import { Component , Renderer2, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from '../../../shared/services/configs/configs.service';

@Component({
  selector: '',
  templateUrl: 'details.component.html',
  providers: [ConfigurationService]  
})
export class CarsDetailsComponent implements OnDestroy {

  title = 'app';
  carDetails:any = {};
  constructor(private renderer : Renderer2, private route: ActivatedRoute, private router: Router, private http : HttpClient, private config : ConfigurationService){
    this.renderer.addClass(document.body, 'm-detail');
  }

  ngOnInit(){
    let self = this ;
    /*self.http.get(self.config.getAPIUrl()+ "car/makes").subscribe(makes=>{
      self.allmakes = makes;
    },error=>{
        console.log(error, "error occured");
    });*/

    this.route
      .queryParams
      .subscribe(params => {
        self.http.get(self.config.getAPIUrl()+ 'car/model/details/'+params.model ).subscribe(details=>{
          console.log(details, "details");
          //console.log(listings, "listings");          
        }, 
        error=>{
          //console.log("error occured while getting listing");
        })
    });
  }

  ngOnDestroy(){
    this.renderer.removeClass(document.body, 'm-detail');
  }
}

