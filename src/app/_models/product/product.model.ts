
import { Tag } from "./tags.model";
import { Category } from "./category.model";
import { Productlang } from "./product-lang-model";
import { supplier } from "./supliers.models"
import { PaymentType } from "./Payment-Type.model";

export interface product {

    id?: number;
    data: Productlang[];
    descrition?: string;
    discount?: number;
    imageSrc?: string;
    supplier?: supplier;
    price: number;
    category: Category[];
    tags: Tag[];
    paymentTypes: PaymentType[];
    _id:number;

}
export interface productWithCounter extends product {
    counter?: number;
    
}


export interface AllProductResponse{
    product: product[],
    numberOfProduct:number
}