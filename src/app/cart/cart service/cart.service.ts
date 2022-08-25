import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { Product } from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedItemSubject = new BehaviorSubject<Product[]>([]);
  selectItems = this.selectedItemSubject.asObservable();
  constructor() { 
    this.getSelectedProducts()
  }

  emitSelectedProduct(products: Product[]){
    this.selectedItemSubject.next(products)
  }


  addItemToCart(product: Product){
    this.selectItems.pipe(take(1), map(products=>{
     products.push(product);
     let prodarr =JSON.stringify(products)
     localStorage.setItem("products", prodarr)
    })).subscribe()
  }

  getSelectedProducts(){
    // let prodarr =JSON.parse(localStorage.getItem("products"))
  }
}
