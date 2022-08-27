import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actionType: string = 'SignIn';
  isUserLoggedIn:boolean = false;
  user: any;
  @ViewChild('buttonClose') closeButton: any;
 
  constructor(private authsvc: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUser()
    
  }
  handleAction(){
    this.actionType = 'SignUp'
  }

  signUpHandler(event: boolean){
    if(event){
      this.actionType = 'SignIn'
    }
  }

  fetchUser(){
    let responseObj = this.authsvc.getUser()
    if(responseObj != null){
      this.isUserLoggedIn = true;
      this.user = responseObj;
      // console.log(this.user)
    }
  }

  signInHandler(event: boolean){
    // debugger
    // if(event){
      debugger
      this.closeButton.nativeElement.click()
      this.fetchUser()
    // }
    
  }


 
  logout(){
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
    this.router.navigate(['/products'])

  }
  
}
