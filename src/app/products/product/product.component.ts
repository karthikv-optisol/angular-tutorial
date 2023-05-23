import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  page_id: any;

  products:any;
  quantity:number=1;
  isLoading:boolean=false;

  constructor(private route: ActivatedRoute,private productService:ProductsService) {

  }
  ngOnInit() {
    this.getProduct();
  }

  getProduct()
  {
    let params = this.route.snapshot.params['id'];
    this.isLoading = true;
    this.productService.getProduct('products/'+params)
    .subscribe(data=>{
      // console.log(data);
      if(data)
      {
        this.products = data;
      }
      this.isLoading = false;
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
        if(result)
        {
          Swal.fire({
            title:'Product added successfully',
            timer:2000
          })
        }
      })
  }
}
