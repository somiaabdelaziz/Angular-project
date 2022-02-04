import { Component, OnInit } from '@angular/core';
import { productServices } from 'src/app/_sevices/product/product.services';
import { product } from './../../../_models/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentTypeService } from 'src/app/_sevices/product/payment-type.service';
import { PaymentType } from 'src/app/_models/product/Payment-Type.model';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/product/category.model';
import { CategoryService } from 'src/app/_sevices/product/category.service';
import { Tag } from 'src/app/_models/product/tags.model';
import { TagsService } from 'src/app/_sevices/product/tags.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  paymentTypes: PaymentType[] = [];
  categoryArray !: Category[];
  tagsArray:Tag[]=[];
  product ={} as product;
  SelectedpaymentTypes: PaymentType[] = [];
  editMode:boolean=false;
 

  constructor(
    private router: Router,
     private productservices: productServices,
       private paymentTypeService: PaymentTypeService,
       private categoryService: CategoryService,
       private tagsService:TagsService,
       private activatedRoute:ActivatedRoute
       ) 
       {}

  ngOnInit(): void {
    this.getAllProductTypes();
    this.getAllCategories();
    this.getAllTags();

    if(this.activatedRoute.snapshot.url[0].path=='edit'){
      console.log(this.activatedRoute.snapshot.params['id'])
      this.editMode=true;
    }
    if(this.editMode)
    {
         this.getProductById();
    }
   
  }

  

  getAllProductTypes() {
    this.paymentTypes = this.paymentTypeService.getAllPaymentTypes();
  }
  getAllCategories() {
    this.categoryArray = this.categoryService.getAllCategories();
  }
  getAllTags(){
    this.tagsArray=this.tagsService.getAllTags();
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
  onCheckChanged(index:number){
  //   this.product.paymentTypes.filter(function(ele){
  //     console.log(ele.id)
  //     if(ele.id!==index)
  //     {
  //       this.product.paymentTypes=[
  //         ...this.product.paymentTypes,
  //         this.paymentTypes[index]];
  //     }
  // });
   if(this.product.paymentTypes){
     this.product.paymentTypes=[
       ...this.product.paymentTypes,
       this.paymentTypes[index]];
   }
   else if(!this.product.paymentTypes) {
     this.product.paymentTypes=[this.paymentTypes[index]];
   }
   console.log(this.product.paymentTypes);
 
  }

  onaddproduct(form: NgForm) {
    console.log(form.value)
    const product: product = form.value;
    this.productservices.addProduct(product);
    this.router.navigateByUrl('home');
  }
}
