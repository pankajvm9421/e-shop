import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  @Output() signInCompleted: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private fb: FormBuilder, private login: LoginService,
    private authsvc: AuthenticationService, private router: Router,private toaster: ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.signInForm = this.fb.group({
      "emailId": ['', [Validators.required]],
      "password": ['', [Validators.required]]
    })
  }

  signIn() {
    // debugger
    if (this.signInForm.valid) {
      this.login.authlogin(this.signInForm.value).subscribe(el => {

        if (Array.isArray(el) && el.length > 0) {
          let user = el[0];
          user['token'] = "njvfsbohboa";
          localStorage.setItem("user", JSON.stringify(user));
          this.signInCompleted.emit(true)
          this.toaster.success("You have logged in Sucessfully")
          // this.router.navigate(['/products'])
        }
        else {
          this.toaster.error("User not found. Please register to login")
        }
      },
      error=>{

      })
    }
  }


}
