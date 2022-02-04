import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/_models/product/product.model';
import { productServices } from 'src/app/_sevices/product/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product = {} as product;
  relatedProduct!:product[];


  constructor(private activatedRoute:ActivatedRoute,private productservices:productServices) {
 
   }

  ngOnInit(): void {
  this.getProductById();
  this.getRelatedProduct();
  }
  getProductById(){
    this.activatedRoute.params.subscribe(
      (params)=>{
        const id=params['id'];
        console.log(id);
        this.product=this.productservices.getProductById(id)!;
        console.log(this.product);
      },
      (err)=>{console.log(err)},
      ()=>{}
    )  
  }
 
  getRelatedProduct(){
    this.relatedProduct=this.productservices.getProductsArray().slice(0,4);
  }

}
