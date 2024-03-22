import { Component, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import data from '../../assets/products-list.json';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../discount.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [FormsModule, DiscountPipe, CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
})
export class ProductInfoComponent {
  // constructor(private activatedRoute: ActivatedRoute) {}
  @Input() id?: any;

  products = data;
  product: any;

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.id);
    this.product = this.products.find((p: any) => p.id == this.id);
    if (!this.product) {
      alert(`Product with ID ${this.id} not found.`);
      // You can handle this case by displaying a message to the user or redirecting to an error page.
    }
  }

  counter = 1;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter <= 1 ? this.counter : this.counter--;
  }
}
