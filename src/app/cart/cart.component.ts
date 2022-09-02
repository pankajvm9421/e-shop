import { Component, OnInit } from '@angular/core';
import { Order } from '../core/modal/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderDetailsSubject: Order = new Order();

  constructor() { }

  ngOnInit(): void {
    this.getProductDetails();
    this.getAddressDetails();
  }


  getProductDetails(){
    let productArr:any;
    productArr = localStorage.getItem("products");

    if(productArr){
      productArr = JSON.parse(productArr);
      this.orderDetailsSubject.products = [...productArr];
    }
  }

  getAddressDetails(){
    let userObj:any;
    userObj = localStorage.getItem("user");
    if(userObj){
      userObj = JSON.parse(userObj);
      this.orderDetailsSubject.address = {...userObj.address};
      this.orderDetailsSubject.mobileNumber = userObj.mobileNumber;
      this.orderDetailsSubject.emailId = userObj.emailId;
    }

   


  }
  
}
