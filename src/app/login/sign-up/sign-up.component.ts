import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordmismatch } from 'src/app/shared/validators/custom.validator';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  signUpForm!: FormGroup;
  FirstName: any;
  @Input() actionName:string = ''
  @Output() SignUpCompleted: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private fb: FormBuilder, private login: LoginService) { }

  ngOnInit(): void {
    this.createFormStructure();
  }

  ngAfterViewInit(){
    console.log('actionName', this.actionName);
  }

  showPage ={
    "firstName": '',
    "lastName": '',
    "mobileNumber": null,
    "dateOfBirth": '',
    "emailId": '',
    "password": '',
    "confirmPassword": '',
   
    "address": {
      "line1":'',
      "line2":'',
      "city":'',
      "state":'',
      "pinCode":null
    }
  }
  createFormStructure(){
    this.signUpForm  = this.fb.group({
      "firstName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-z]+$")]],
      "lastName":['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-z]+$")]],
      "mobileNumber":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "dateofBirth":['',[]],
      "emailId":['',[Validators.required,Validators.minLength(2)]],
      "password":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "confirmPassword":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "isFormAccept":[false,[Validators.required]],
      "address":this.fb.group({
        "line1":['',[]],
        "line2":['',[]],
        "city":['',[]],
        "state":['',[]],
        "zipCode":['',[]]
      })

    },{validator:passwordmismatch})
  }

  getName(){
    this.FirstName = this.signUpForm.controls['firstName']
  }


  onFormSubmit(){
    if (this.signUpForm.valid){
      this.login.registerUser(this.signUpForm.value).subscribe(el=>{
        
        this.SignUpCompleted.emit(true);
      })
    }
  }
}