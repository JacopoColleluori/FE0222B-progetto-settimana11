import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  sub!: Subscription;

  prods!: Products[];

  constructor(private prdtSrv: ProductService, private cartSrv: CartService) {}

  addToCart(obj: Products) {
                          //method for adding the object into the array in the service
    console.log(obj);     //control if the object is passed
    this.cartSrv.addToSrvArray(obj);
  }

  ngOnInit(): void {
    this.sub = this.prdtSrv.get().subscribe((arrayProd) => {
      this.prods = arrayProd;
      console.log(this.prods); //control of the local array
    });
  }
  addNumber() {
    //method for counting the elements in the cart
    this.cartSrv.countCart();
  }
}
