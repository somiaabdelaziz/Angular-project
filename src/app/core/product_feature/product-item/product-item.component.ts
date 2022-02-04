import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { every } from 'rxjs';
import { product } from 'src/app/_models/product/product.model';
import { productServices } from './../../../_sevices/product/product.services';
 
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem !: product;
  filteredValue:string='';
  constructor(public productservices: productServices) { 
  }
  
  onItemadd() {
  this.productservices.addProductForCard(this.productItem)
  }
  ngOnInit(): void {
  }
    calculatePrice():Number{
      let result;
      if (this.productItem.discount) {
        result = this.productItem.price - this.productItem.discount;
      } else {
        result = this.productItem.price;
      }
      return result;
    }

    DeltedItem(deletedProduct:product){
      console.log(deletedProduct);
       this.productservices.deletItemFromList(deletedProduct);
    }


    

}
