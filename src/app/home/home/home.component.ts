import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Product } from 'src/app/core/modal/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsArray: Product[] = [];
  filteredProducts: Product[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    // debugger
    this.http.getData('productsitems').subscribe((el:Product[])=>{
      // console.log("el",el);

      if(Array.isArray(el) && el.length > 0){
        this.productsArray = el ;
        this.filterCategory('all');
      }
    },
    error=>{
    })
  }

  filterCategory(type: any){
    if(type == 'all'){
      this.filteredProducts = this.productsArray ;
    }else {
      this.filteredProducts = this.productsArray.filter((el:any)=> (el.category == type));
    }
  }
  categoryArr = [
    {'type':'all','category':'Top Offers'},
    {'type':'clothing','category':'Clothing'},
    {'type':'','category':'Top Offers'},
  ]

}
