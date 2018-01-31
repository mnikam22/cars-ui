import { Component , Renderer2, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from '../../../shared/services/configs/configs.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: '',
  templateUrl: 'details.component.html',
  providers: [ConfigurationService]  
})
export class CarsDetailsComponent implements OnDestroy {

  modalRef: BsModalRef;
  title = 'app';
  carDetails:any = {};
  relatedModels:any = [];
  apiImageUrl = this.config.getAPIUrl() + 'uploads/';
  constructor(private renderer : Renderer2, private route: ActivatedRoute, private router: Router, private http : HttpClient, private config : ConfigurationService, private modalService: BsModalService){
    this.renderer.addClass(document.body, 'm-detail');
  }
  
  
  openModal(template: TemplateRef<any>, listingId) {
    console.log(listingId, "listingId ");
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(){
    let self = this ;
    this.route
      .queryParams
      .subscribe(params => {
        self.http.get(self.config.getAPIUrl()+ 'car/model/details/'+params.model ).subscribe(details=>{
          self.carDetails = details; 
          self.http.get(self.config.getAPIUrl()+ 'car/model/related/'+params.model ).subscribe(related_models=>{
            self.relatedModels = related_models;                
          }, 
          error=>{
            //console.log("error occured while getting listing");
          })               
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

