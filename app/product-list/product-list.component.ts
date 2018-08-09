import { Component, OnInit } from '@angular/core';
import { ProductModel} from '../product-model';
import { Router } from '@angular/router/src/router';
import { ProductService} from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listOfProducts : ProductModel[];
  groupOfProducts : ProductModel[];
  constructor(private productService : ProductService) {
    this.productService.getProducts().subscribe(data => this.listOfProducts=data
    
    );
   }

  ngOnInit() {
   
  }

}