import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClientModule,
   HttpClient, 
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

const API = 'https://fakestoreapi.com/';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {



  constructor(private http: HttpClient) { }

  getProducts(URL:any): Observable<any>
  {
    return this.http.get(API+URL);
  } 
  getProduct(URL:any): Observable<any>{
    return this.http.get(API+URL);
  }

  addToCart(URL:any,data:any)
  {
    return this.http.post(API+URL,data);
  }

  getUserCart(URL:any)
  {
    return this.http.get(API+URL);
  }

  getCategory(URL:any)
  {
      return this.http.get(API+URL);
  }

  getCategoryProduct(URL:any)
  {
    return this.http.get(API+URL);
  }
}
