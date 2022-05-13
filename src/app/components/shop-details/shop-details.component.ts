import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/model/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss'],
})
export class ShopDetailsComponent implements OnInit {
  prod!: Products ;
  sub!: Subscription;
  error:boolean=true;
  constructor(private prdctServ: ProductService, private route:ActivatedRoute,private cartSrv:CartService) {}

  ngOnInit(): void {
    this.route.params.subscribe(async (params)=>{
      const id = +params['id'];
      this.prdctServ.getProducts(id).subscribe((obj)=>{
        this.prod=obj;
      },errorProd=>{
        this.error=false;
      })
    })

}
}
