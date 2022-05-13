import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Products } from 'src/app/model/products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  arrayCart!:Products[];

  tot:number=0;

  constructor(private crtService:CartService) { }

  ngOnInit(): void {
    this.arrayCart =this.crtService.getArrayCart();
  }
  totalPrice(){                         //method for the total price in the template
 for(let prod  of this.arrayCart){
  this.tot += prod.price
  console.log(this.tot)                 //control of the total price
 }
 return this.tot
}

}
