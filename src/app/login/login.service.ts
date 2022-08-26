import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpservice: HttpService) { }
  registerUser(data:any){
   return this.httpservice.postData('users',data)
  }
}
