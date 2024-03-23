import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor() {}

  private cartProducts = new BehaviorSubject<any[]>([]);

  getCartProducts() {
    return this.cartProducts.asObservable();
  }
  setCartProduct(newVal: any) {
    this.cartProducts.next(newVal);
  }

  // /////////////////////////////////////////////////////////////////////////
  private cartCounter = new BehaviorSubject<number[]>([]);

  getCounter() {
    return this.cartCounter.asObservable();
  }
  setCounter(newValue: number[]) {
    this.cartCounter.next(newValue);
  }
}

// addToCartProducts(newProducts: any) {
//   const updatedProducts = this.cartProducts.getValue().concat(newProducts);
//   this.cartProducts.next(updatedProducts);
//   console.log(this.cartProducts);
// }
