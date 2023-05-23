import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductsService) {

  }
  cartProducts!: any[];
  Products!: any[];
  cartEmpty: boolean = false;
  isLoading:boolean = false;
  ngOnInit(): void {
    this.getCart()   
  }

  getCart() {
    let productId: any = [];
    let products: any = [];
    let quantity:any =[];
    this.isLoading = true;
    this.productService.getUserCart('carts/user/2')
      .subscribe((result: any) => {
        // console.log(result,"results");
        if (result) {
          result.forEach((element: any) => {
            // console.log("element",element.products);
            element.products.forEach((pid: any) => {
              // console.log("pid",pid);
              productId.push(pid.productId);
              quantity.push(pid.quantity);
            });
          });
          this.cartProducts = productId;

          this.productService.getProducts('products').subscribe((data) => {
            
            if (data) {
              data && data.forEach((element: any) => {
                // console.log("element",element);
                productId && productId.forEach((pid: any,i:number) => {
                  if (pid == element.id) {
                    element.quantity = quantity[i];
                    products.push(element)
                  }
                })
              });
             
              
            }
          })
        }
        console.log(products,"products")
        this.Products = products;
        this.isLoading = false;
      },
        ((error: any) => {
          this.cartEmpty = true;
        })
      );
  }
  
}
