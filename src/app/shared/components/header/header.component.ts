import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user/user.service";
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import * as toastr from 'toastr';

declare var localStorage  : any;

@Component({
  selector: 'cars-header',
  templateUrl: 'header.component.html',
  providers:[]  
})

export class CarsHeaderComponent implements OnInit {
  title = 'app';
  loggedInUser = JSON.parse(localStorage.getItem('user'));

  constructor(private userService : UserService, private router : Router, private route: ActivatedRoute){

    /*let allowedUrl = (this.router.url.indexOf("dealer/signup") == -1 && this.router.url.indexOf("dealer/login") == -1);
    if(allowedUrl && !this.loggedInUser.email){
      this.router.navigate(['/dealer/login']);
    } */
    let self = this;
    self.userService.getUpdatedUser().subscribe(user=>{
      self.loggedInUser = JSON.parse(user);
      console.log(self.loggedInUser, "User updated");
    })

  }

  doLogout(){
    let self = this;    
    localStorage.clear();
    toastr.success("You have logged out successfully. Redirecting to login page.");
    setTimeout(function(){
      self.router.navigate(['/dealer/login']);
    },1300);
        
  }

  ngOnInit(){
      console.log("Header component OnInit called");
  }

}