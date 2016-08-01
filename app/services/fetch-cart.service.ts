import { Injectable } from '@angular/core';

import {Product} from '../models/product';

import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'



@Injectable()
export class shoppingCartService {

  constructor(public http: Http) {}

  fetchProducts():Observable<Product[]> {
    const data_fetched = this.http.get('../app/data/product-feed.json')
                                    .map((response: Response) => {
                                      return (response.json()).productsInCart
                                                          .map(product => {
                                                            return new Product(product);
                                                          })
                                     
                                    });
    return data_fetched; 
  }

 

}
