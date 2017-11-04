import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from './../products.service';
import { Product } from './../../models/product';
import { Component, OnInit  } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  
  //private index:number;

  private category : Observable<Product[]>;
  private products : Product[];

  private isReady: boolean = false;
  

  constructor(private productsService:ProductsService, private route: ActivatedRoute) {}
  
  ngOnInit() {
    
    this.route.paramMap
    .switchMap((params: ParamMap) => 
    this.category = this.productsService.getCategory(+params.get('index')))

  
    .subscribe(i => {
      this.products = i;
      this.isReady = true;
    });
      
  }

}
