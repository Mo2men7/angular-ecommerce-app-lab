import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartCount: number[] = [];
  cartPrds: any[] = [];

  constructor(private router: Router, private cartProducts: MyServiceService) {}

  ngOnInit() {
    this.cartProducts.getCartProducts()
      .subscribe((arr) => (this.cartPrds = arr));
    this.cartProducts.getCounter().subscribe((val) => (this.cartCount = val));
  }
  increaseCounter(index: number) {
    this.cartCount[index] += 1;
  }
  decreaseCounter(index: number) {
    this.cartCount[index] -= 1;
  }
  redirectToHome() {
    this.router.navigate(['/']);
  }
  calculatetotalprice():number{
    let totalprice=0;
    for(let i=0;i<this.cartPrds.length;i++){
      totalprice+=this.cartPrds[i].price*this.cartCount[i]
    }
    return totalprice;
  }
  // increaseCCCounter(i: number) {
  //   this.CartCardCounter.setCartCardCounter(this.ccCounter[i] + 1);
  // }
  // decreaseCCCounter(i: number) {
  //   this.CartCardCounter.setCartCardCounter(this.ccCounter[i] - 1);
  // }
}
