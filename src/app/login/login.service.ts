import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpservice: HttpService) { }

  registerUser(data:any){
   return this.httpservice.postData('users',data)
  }

    authlogin(data:any){
    const params = new HttpParams()
    .set("emailId", data.emailId)
    .set("password", data.password)
    return this.httpservice.getData('users',params)
  }
}
