import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://fakestoreapi.com/auth/';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
 
  constructor(private http:HttpClient) { 

  }

  login(url:string,data:any)
  {
    return this.http.post(API+url,data);
  }
}
