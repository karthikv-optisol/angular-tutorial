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
  quantity:number=1;

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

  increaseQuantity()
  {
    if(this.quantity>0)
    {
      this.quantity++;
    }
    
  }
  decreaseQuantity()
  {
    if(this.quantity>0)
    {
      this.quantity--;
    }
  }

  addToCart(product:any)
  {
      // console.log("product",product);
      let data = {
        userId:1,
        date:new Date(),
        products:[{productId:product.id,quantity:this.quantity}]
      }

      this.productService.addToCart('carts',data).subscribe((result)=>{
        console.log("results",result);
      })
  }
}
