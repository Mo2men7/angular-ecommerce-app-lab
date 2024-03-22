import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductInfoComponent } from './product-info/product-info.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    title: 'Home',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Your Cart',
  },
  {
    path: 'product-info/:id',
    component: ProductInfoComponent,
    title: 'Productg Info',
  },
  // the not found page must be the last one
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
