import { Product } from './product';

export interface Categories{
    name?: string;
    img_src?: string;
    url?: string;
    products?:Product[];
}

export class Category implements Categories{
    constructor(public name?:string, public img_src?:string, public url?:string, public products?:Product[]){
    }
}