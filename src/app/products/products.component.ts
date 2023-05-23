import { Component, OnInit } from '@angular/core';
import { products } from "../models/Products"
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private productsService: ProductsService) {

  }

  products: any = [];
  categories:any = [];

  ngOnInit() {

    this.getProducts();
    this.getCategory();
  }

  getCategory() {
    this.productsService.getCategory('products/categories').subscribe((data) => {
      console.log("data", data);
      if(data)
      {
        this.categories = data;
      }
    });
  }

  getCategoryProducts(event:any)
  {
      // console.log(event.target.value,"event");
      let category = event.target.value;

      if(category)
      {
        this.productsService.getCategoryProduct('products/category/'+category).subscribe((data)=>{
          if(data)
          {
            this.products = data;
          }
        })
      }
  }

  getProducts() {
    this.productsService.getProducts('products').subscribe((data) => {
      // console.log("data",data);
      if (data) {
        this.products = data;
      }
    })
  }
}
