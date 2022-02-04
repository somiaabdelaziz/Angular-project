import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryArray:Category[]=[
    {id:1,name:'food'},
    {id:2,name:'electronics'},
    {id:3,name:'Clothes'},
    {id:4,name:'books'},
    {id:5,name:'Baby'},
    {id:6,name:'Toys'},
    {id:7,name:'Sports'},
    {id:8,name:'Automative'},
    {id:9,name:'Furniture'},
    {id:10,name:'Home'},
    {id:11,name:'Health'},
    {id:12,name:'Beauty'},
  ]

  constructor() { }

  getAllCategories():Category[]{
    return this.categoryArray;
  }
}
