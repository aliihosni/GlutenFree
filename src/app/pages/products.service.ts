import { Category} from './../models/category';
import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {


  constructor(private db: AngularFireDatabase) {}

  getCategory(name:string): Observable<Category[]> {
    return this.db.list('/categories', ref => ref.orderByChild('name').equalTo(name)).valueChanges();
  }
}