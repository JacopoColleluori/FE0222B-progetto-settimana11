import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { RouterModule, Route } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'product/:id',
    component: ShopDetailsComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShopComponent,
    NavbarComponent,
    HomeComponent,
    ShopDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule,  RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
