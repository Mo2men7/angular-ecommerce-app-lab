import { Component, Input } from '@angular/core';
import { CartCardCounterService } from '../cart-card-counter.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css',
})
export class CartCardComponent {
  @Input() p: any;
  ccCounter: any = [];
  newProds: any = [];
  @Input() i: any;

  constructor(
    private CartCardCounter: CartCardCounterService,
    private singeProduct: ProductsService
  ) {}

  ngOnInit() {
    this.CartCardCounter.getCartCardCounter().subscribe(
      (res) => (this.ccCounter = res)
    );
    this.singeProduct.getProducts().subscribe((res) => (this.newProds = res));
  }
  increaseCCCounter(i: number) {
    this.CartCardCounter.setCartCardCounter(this.ccCounter[i] + 1);
  }
  decreaseCCCounter(i: number) {
    this.CartCardCounter.setCartCardCounter(this.ccCounter[i] - 1);
  }
}
