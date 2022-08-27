import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  // registerUser(data:any){
  //   return this.httpservice.postData('users',data)
  // }

  // authlogin(data:any){
  //   const params = new HttpParams()
  //   .set("emailId", data.email)
  //   .set("password", data.password)
  //   return this.httpservice.getData('users',params)
  // }
  getUser(){
    var user:any;
    user = localStorage.getItem('user')
    if(user){
      user = JSON.parse(user)
      return user;
      // console.log(user)
    }
    return null;
  }
}
