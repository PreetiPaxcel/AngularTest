import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'productDetail/id', component : ProductDetailComponent}
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }