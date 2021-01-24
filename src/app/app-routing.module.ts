import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';

const routes: Routes = [
  {path : '', redirectTo: '/products', pathMatch: 'full' },
  {path : 'products' , component: ProductsListComponent},
  {path : 'addProduct' , component: AddProductComponent},
  {path : 'addCategory' , component: AddCategoryComponent},
  {path : 'UpdateProduct/:id' , component : UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
