import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  totCart:number = 0;
  constructor(private cartSrv:CartService) { }

  ngOnInit(): void {
    this.cartSrv.sub.subscribe((number)=>{
 this.totCart=number;
    })
  }

}
