import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

sub!:Subscription;

 prods!:Products[]|undefined;

  constructor(private prdtSrv:ProductService) { }

  ngOnInit(): void {
   this.sub = this.prdtSrv.get().subscribe(arrayProd=>{
     this.prods=arrayProd;
     console.log(this.prods);
   })
  }



}
