import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpservice: HttpService) { }

  registerUser(data:any){
    return this.httpservice.postData('users',data)
  }

  authlogin(data:any){
    const params = new HttpParams()
    .set("emailId", data.email)
    .set("password", data.password)
    return this.httpservice.getData('users',params)
  }
  getUser(){
    var user:any;
    user = localStorage.getItem('user')
    if(user){
      user = JSON.parse(user)
      return user;
    }
    return null;
  }
}
