import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://api.noroff.dev/api/v1/rainy-days');
    
  }
  getSingleProduct(id: string) {
    return this.http.get(`https://api.noroff.dev/api/v1/rainy-days/${id}`);
  }
}
