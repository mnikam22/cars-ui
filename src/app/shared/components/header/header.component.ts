import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user/user.service";
declare var localStorage  : any;


@Component({
  selector: 'cars-header',
  templateUrl: 'header.component.html',
  providers:[UserService]  
})
export class CarsHeaderComponent implements OnInit {
  title = 'app';

  constructor(private userService : UserService){
      
  }

  ngOnInit(){
      let self = this;
      self.userService.getUpdatedUser().subscribe(user=>{
        console.log(user, "User updated");
      })
      console.log("Header component OnInit called");
  }
}