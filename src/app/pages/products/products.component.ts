import { Observable } from 'rxjs/Observable';
import { Category } from './../../models/category';

import { ProductsService } from './../products.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {


  private products : Product[];
  private categories : Observable<Category[]>;
  private category : Category;

  constructor(private productsService:ProductsService) {}
  
  ngOnInit() {
    
    this.categories = this.productsService.getCategory("Sugary");

    this.categories.subscribe(i => {
      this.category = i[0];
      this.products = this.category.products;
      console.log(this.products);
    });
      
  }

}
