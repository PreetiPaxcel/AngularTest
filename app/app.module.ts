import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import {ProductModel} from './product-model';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,  AppRoutingModule, ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductDetailComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
