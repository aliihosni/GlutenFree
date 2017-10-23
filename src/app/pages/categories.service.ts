import { Category } from './../models/category';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  constructor() { }

  getCategories(): Category[] {
    const assets : string = "../assets/";
    let categories : Array<Category> = [
        new Category( "Sugary snacks",  assets + "sugary.png", "#"),
        new Category( "Beverages",  assets + "beverages.png", "#"),
        new Category( "Biscuits",  assets + "biscuits.png", "#"),
        new Category( "Crisps",  assets + "crisps.png", "#"),
        new Category( "Dairies",  assets + "dairies.png", "#"),
        new Category( "Meats",  assets + "meats.png", "#")
    ];

    return categories;
}

}
