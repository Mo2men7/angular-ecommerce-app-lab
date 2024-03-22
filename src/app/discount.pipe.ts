import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform(price: number = 0, discount: number = 0): number {
    return price - price * (discount / 100);
  }
}

// (
//     (product.price -
//       (product.price * product.discountPercentage) / 100) *
//     counter
//   ).toFixed(2)
