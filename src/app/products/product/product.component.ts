import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  page_id: any;

  products:any;

  constructor(private route: ActivatedRoute,private productService:ProductsService) {

  }
  ngOnInit() {
    let params = this.route.snapshot.params['id'];

    this.productService.getProduct('products/'+params)
    .subscribe(data=>{
      // console.log(data);
      if(data)
      {
        this.products = data;
      }
    })
     
  }
}
