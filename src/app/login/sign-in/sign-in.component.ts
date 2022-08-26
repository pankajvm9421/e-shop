import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  @Output() SignInCompleted: EventEmitter<boolean> = new EventEmitter(false)
  
  constructor(private fb: FormBuilder, private login: LoginService) { }

  ngOnInit(): void {
    this.createSignInForm();
  }
  createSignInForm(){
    this.signInForm = this.fb.group({
      "email":['',[Validators.required]],
      "password":['',[Validators.required]]
    })
  }
 
  signIn(){
    if(this.signInForm.valid){
      this.login.registerUser(this.signInForm.value).subscribe(el=>{
        if(Array.isArray(el)){
          let user = el[0];
          user['token'] = "njvfsbohboa";
          localStorage.setItem("user", user);
          this.SignInCompleted.emit(true)
        }
        alert("Login response " +el)
      })
    }
  }


}
