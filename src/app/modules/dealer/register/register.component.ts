import { Component , Renderer2, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: '',
  templateUrl: 'register.component.html'
})



export class DealerSignupComponent {
  title = 'app';
  dealer:any = {};
  signupsMsg:any = false;

  constructor(private renderer : Renderer2, private http: Http){
    //this.renderer.addClass(document.body, 'm-detail');
    /*$(document).ready(function(){
         console.log("okkkkkkk");
    });*/
  }

  dealerSignup(data){
    data = data.value;
    let self = this;
    self.dealer = {
      first_name : data.firstname,
      last_name : data.lastname,
      email : data.email,
      password : data.password ,
    }
    console.log(data, "self.dealer");
    self.http.post("http://localhost:3000/dealer/signup", self.dealer ).subscribe(response => {
      self.signupsMsg = {error: false , message : "Dealer signup successfully"};
    },error=>{
      self.signupsMsg = {error: true , message : "Error in signup as dealer. Please try again"};
    });    
  }

//   ngOnDestroy(){
//     this.renderer.removeClass(document.body, 'm-detail');
//   }
}
