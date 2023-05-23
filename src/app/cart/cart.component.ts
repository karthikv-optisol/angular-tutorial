import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private productService:ProductsService)
  {

  }
  cartProducts!:any[];

  ngOnInit():void
  {
      this.getCart()
  }

  getCart(){

    this.productService.getUserCart('carts/user/1')
    .subscribe((result:any)=>{
      // console.log(result,"results");
      if(result)
      {
        result.forEach((element:any) => {
            // console.log(element.products,"element");
            element.products.forEach((product:any) => {
             this.getProduct(product.productId,product.quantity);
            });
          });
          console.log("cartproducts",this.cartProducts);
      }
    });
  }
  getProduct(productId:number,quantity:number)
  {
      let result:any = this.productService.getProduct('products/'+productId).subscribe((data)=>{
        return data;
      })

      this.cartProducts=result;

      console.log("result",result);

      // console.log("cartProducts",this.cartProducts)

      return result;
  }
}
