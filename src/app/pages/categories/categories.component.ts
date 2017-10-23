import { CategoriesService } from './../categories.service';
import { element } from 'protractor';
import { Category, Categories } from './../../models/category';
import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService]
})
export class CategoriesComponent  {


  private categories: Array<Category>;


  constructor(private categoriesService:CategoriesService) { 

      this.categories = this.categoriesService.getCategories();
          
  }

}
