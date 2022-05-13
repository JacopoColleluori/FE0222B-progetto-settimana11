import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  rootUrl = 'http://localhost:4201';
  constructor(private http: HttpClient) {}
  get()
  {
  return this.http.get<Products[]>(`${this.rootUrl}/products`);
  }
  getProducts(id:number) {
   return this.http.get<Products>(`${this.rootUrl}/products/${id}`)
  }
}
