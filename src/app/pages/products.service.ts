import { Category} from './../models/category';
import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class ProductsService {

  storageRef: any;

  constructor(private db: AngularFireDatabase) {
    this.storageRef = firebase.storage().ref();
  }


  getCategories(): Observable<Category[]> {
    return this.db.list('/categories').valueChanges();
  }

  getCategory(index:number): Observable<Product[]> {
    return this.db.list('/categories/'+index+'/products').valueChanges();
  }
}