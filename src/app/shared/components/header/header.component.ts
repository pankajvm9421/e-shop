import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actionType: string = 'SignIn';
  isUserLoggedIn:boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  handleAction(){
    this.actionType = 'SignUp'
  }
  signInHandler(event){
    if(event){
      console.log(event)
    }
    
  }

  signUpHandler(event){
    if(event){
      this.actionType = 'SignIn'
    }
  }

}
