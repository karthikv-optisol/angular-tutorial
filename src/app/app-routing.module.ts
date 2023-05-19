import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { BasicComponent } from './basic/basic.component';
import { ProductComponent } from './products/product/product.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'forms', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
