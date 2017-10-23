import { Trace } from './trace';
import { SoldIn } from './sold-in';
import { ImgSrc } from './img-src';
import { Additive } from './additive';
import { NutritionFacts } from './nutrition-facts';
export class Product {
    constructor(public name?:string, public quantity?:string, 
        public barcode?:number, public made_in?:string, public common_name?:string,
        public ingredients?:string, public Nutrition_facts?:Array<NutritionFacts>,
        public additives?:Array<Additive>, public img_src?:Array<ImgSrc>,
        public sol_in?:Array<SoldIn>, public traces?:Array<Trace> ){}

        getFistImg(){
            
            return this.img_src?this.img_src[0].src:null
        }

    }


