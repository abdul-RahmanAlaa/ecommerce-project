import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsWithApiService {
  constructor(private httpclient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    // return this.httpclient.get<IProduct[]>('http://localhost:3000/products');
    return this.httpclient.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  getProductByID(productID: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(
      `${environment.APIURL}/products/${productID}`
    );
  }
}
