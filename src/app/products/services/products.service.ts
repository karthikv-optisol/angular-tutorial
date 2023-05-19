import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClientModule,
   HttpClient, 
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

const API = 'https://api.escuelajs.co/api/v1/';

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
}
