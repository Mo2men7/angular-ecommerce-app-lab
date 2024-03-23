import { Component, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import data from '../../assets/products-list.json';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../discount.pipe';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { Router, RouterLink } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [FormsModule, DiscountPipe, CommonModule, RouterLink],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
})
export class ProductInfoComponent {
  // constructor(private activatedRoute: ActivatedRoute) {}
  newProds: any[] = [];
  ccCounter: number[] = [];

  constructor(
    private singeProduct: ProductsService,
    private router: Router,
    private cartProducts: MyServiceService // private counterTawfik: MyServiceService
  ) {}
  @Input() id?: any;

  // products = data;
  product: any;

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    // console.log(this.id);
    this.singeProduct
      .getSingleProduct(this.id)
      .subscribe((res) => (this.product = res));

    this.cartProducts
      .getCartProducts()
      .subscribe((arr) => (this.newProds = arr));

    this.cartProducts.getCounter().subscribe((arr) => (this.ccCounter = arr));

    // this.singeProduct.getProducts().subscribe((res) => (this.newProds = res));
  }

  redirectToCart(prd: any) {
    // this.newProduct.addToCartProducts(this.product);
    this.ccCounter.push(1);
    this.newProds.push(prd);
    this.cartProducts.setCounter(this.ccCounter);
    this.cartProducts.setCartProduct(this.newProds);
    // this.router.navigate(['cart']);
  }
}

/*
  counter = 1;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter <= 1 ? this.counter : this.counter--;
  }
  */
