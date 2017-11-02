import { ProductsService } from './../products.service';
import { element } from 'protractor';
import { Category } from './../../models/category';
import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [ProductsService]
})
export class CategoriesComponent  {
  


  private categoriesOb: Observable<Category[]>;
  private categories: Category[];
  private isReady: boolean = false;


  constructor(private categoriesService:ProductsService) { 

      this.categoriesOb = this.categoriesService.getCategories();
      this.categoriesOb.subscribe(i => {
        this.categories = i;   
        this.categories.forEach((element, index) => {
          
                this.categoriesService.storageRef.child(element.img_src)
                .getDownloadURL().then(url =>
                    { 
                      this.categories[index].img_src= url;
                      this.isReady = true;
                    }
                );
              });     
      });
          
  }
  

  

}
