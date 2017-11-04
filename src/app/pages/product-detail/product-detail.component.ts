import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from './../products.service';
import { Product } from './../../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ProductsService]
})
export class ProductDetailComponent implements OnInit {

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  private productOb : Observable<Product>;
  private product : Product;

  private isReady: boolean = false;
  
  constructor(private productsService:ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => 
    this.productOb = this.productsService.getProduct(+params.get('index'),+params.get('id')))

  
    .subscribe(i => {
      this.product = i;
      console.log(this.product);
      
      
      this.isReady = true;
    });

  }

}
