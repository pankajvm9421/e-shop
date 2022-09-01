import { Injectable } from '@angular/core';
import { BehaviorSubject, take, map } from 'rxjs';
import { Product } from 'src/app/core/modal/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selecteitemSubject = new BehaviorSubject<Product[]>([]);
  selectitems = this.selecteitemSubject.asObservable();


  constructor() { }

  emitSelectedProduct(products: Product[]){
    this.selecteitemSubject.next(products)
  }

  addItemToCart(product: Product){
    this.selectitems.pipe(take(1), map(products=>{
      products.push(product);
      let prodarr = JSON.stringify(products);
      localStorage.setItem('products', prodarr)

    })).subscribe()
  }

  getSelectedProducts(){
    let prodarr:any=[];
    prodarr = localStorage.getItem("products")

    if(prodarr){
      prodarr = JSON.parse(prodarr);
      this.emitSelectedProduct(prodarr);
    }
  }
}
