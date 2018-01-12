import { Component , Renderer2, OnDestroy, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';
import * as toastr from 'toastr';
import 'block-ui';
import { ConfigurationService } from '../../../shared/services/configs/configs.service';

@Component({
  selector: '',
  templateUrl: 'upload-image.component.html'  
})

export class UploadCarImageComponent implements OnInit {
  title = 'app';
  selectedModels:any = [];
  activeStep = 1 ;
  allmakes : Object = [];
  constructor(private renderer : Renderer2, private http: HttpClient, private config: ConfigurationService){
    //this.renderer.addClass(document.body, 'm-listingsTwo');
  }

  ngOnInit(){
    let self = this;
    self.http.get(self.config.getAPIUrl()+ "car/makes").subscribe(makes=>{
        self.allmakes = makes;
    },error=>{
        console.log(error, "error occured");
    })
  }

  uploadImage(form){
    console.log("Upload car image called");
  }

  /* ngOnDestroy(){
    this.renderer.removeClass(document.body, 'm-listingsTwo');
  } */
  
}
