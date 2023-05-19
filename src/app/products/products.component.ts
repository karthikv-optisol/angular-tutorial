import { Component,OnInit } from '@angular/core';
import {products} from "../models/Products"
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private productsService:ProductsService)
  {

  }

  products:any=[];
  
  ngOnInit() {
   this.productsService.getProducts('products').subscribe((data)=>{
      // console.log("data",data);
      if(data)
      {
        this.products = data;
      }
    })
  }
}
