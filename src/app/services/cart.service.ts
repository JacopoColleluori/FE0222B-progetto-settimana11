import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  prodCart!: Products[];
  sub = new Subject<number>();
  counter=0;

  constructor() {
    this.prodCart = [];
  }

  getArrayCart() {
    console.log(this.prodCart);
    return this.prodCart;
  }

  addToSrvArray(arrayProd: Products) {
    console.log(arrayProd);
    this.prodCart.push(arrayProd);
    console.log(this.prodCart);
  }
  countCart(){
   this.counter ++;
   this.sub.next(this.counter);
  }
}
