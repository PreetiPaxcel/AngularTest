import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ProductModel} from './product-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {
     providedIn: 'root'
  }
)
export class ProductService{

  constructor(private httpClient : HttpClient) { }

  productUrl="https://session-paxcel.herokuapp.com";


  getProducts() : Observable<ProductModel[]>{
     return this.httpClient.get<ProductModel[]>(this.productUrl+'/products');
  }
}