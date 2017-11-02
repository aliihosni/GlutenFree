import { Product } from './product';

export interface Categories{
    name?: string;
    img_src?: string;
    products?:Product[];
}

export class Category implements Categories{
    constructor(public name?:string, public img_src?:string, public products?:Product[]){
    }
}