import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 

 
import { productServices } from './../../../_sevices/product/product.services';
import { product } from 'src/app/_models/product/product.model';
 
 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  enteredValue:string='';
  p: number = 1;
  productArray: product[]=[]; 
    constructor(private productservices: productServices) {
    this.productservices.getAllProduct().subscribe(
      (result)=>{this.productArray=result.product;},
      (err)=>{console.log(err)},
    )
   
     
    }
 
  ngOnInit(): void {}
  enteredSearchValue2:string='';

 
  receiveData(data:string){
   this.enteredValue=data;
   console.log(data);
    this.productservices.getFilterValue(this.enteredValue);
   
  }

 
  

}