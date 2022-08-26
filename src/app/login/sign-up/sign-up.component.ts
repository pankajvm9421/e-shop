import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { passwordmismatch } from 'src/app/shared/validators/custom.validator';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  FirstName: any;
  user: any;
  @Input() actionName: string = ''
  @Output() SignUpCompleted: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private fb: FormBuilder, private login: LoginService, private authsvc: AuthenticationService) { }

  ngOnInit(): void {
    this.createFormStructure();
    this.user = this.authsvc.getUser()
    if (this.user != null) {
      this.signUpForm.patchValue(this.user)
    }
  }

  ngAfterViewInit() {
    console.log('actionName', this.actionName);
  }

  showPage = {
    "firstName": '',
    "lastName": '',
    "mobileNumber": null,
    "dateOfBirth": '',
    "emailId": '',
    "password": '',
    "confirmPassword": '',

    "address": {
      "line1": '',
      "line2": '',
      "city": '',
      "state": '',
      "pinCode": null
    }
  }
  createFormStructure() {
    this.signUpForm = this.fb.group({
      "firstName": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[a-zA-z]+$")]],
      "lastName": ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[a-zA-z]+$")]],
      "mobileNumber": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "dateofBirth": ['', []],
      "emailId": ['', [Validators.required, Validators.minLength(2)]],
      "password": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "confirmPassword": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "isFormAccept": [false, [Validators.required]],
      "address": this.fb.group({
        "line1": ['', []],
        "line2": ['', []],
        "city": ['', []],
        "state": ['', []],
        "zipCode": ['', []]
      })

    }, { validator: passwordmismatch })
  }



  onFormSubmit() {
   

    // this.login.registerUser(this.signUpForm.value).subscribe(el => {
    //   this.SignUpCompleted.emit(true);
    // })
    // if (this.signUpForm.valid) {

    // }



    if (this.signUpForm.valid) {
    this.login.registerUser(this.signUpForm.value).subscribe(el => {
      console.log('response', el);
      this.SignUpCompleted.emit(true);
    }
    )
    }
    console.log("formValue", this.signUpForm)
  }


  getName() {
    this.FirstName = this.signUpForm.controls['firstName']
  }

}