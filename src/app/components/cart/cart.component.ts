import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Products } from 'src/app/model/products';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  arrayCart!: Products[];

  tot: number = 0;

  form!: FormGroup;

  constructor(private crtService: CartService, private formb: FormBuilder) {}

  ngOnInit(): void {


    this.arrayCart = this.crtService.getArrayCart();

    this.form = this.formb.group({
      name: [],
      email: [],
      address: [],
    });
    this.tot = 0;
    this.tot = this.totalPrice();
  }
  totalPrice() {
    //method for the total price in the template
    for (let prod of this.arrayCart) {
      this.tot += prod.price;
      console.log(this.tot); //control of the total price
    }
    return this.tot;
  }

  getFormControl(nameEl: string) {
    return this.form.get(nameEl) as AbstractControl;
  }
  submit() {
    console.log(this.form.value);
    console.log("Ordine Completato!!!");
    alert("Complimenti. Ordine completato");
    this.form.reset();
    this.crtService.resetCart();
    this.arrayCart = [];
    this.tot = 0;
  }
}
