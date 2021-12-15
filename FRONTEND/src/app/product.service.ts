import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';
import { environment } from 'src/environments/environment';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(environment.baseUrl);
  }
}
