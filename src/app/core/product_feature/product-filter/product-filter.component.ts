import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { productServices } from 'src/app/_sevices/product/product.services';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  value!:number;
  constructor(public productService:productServices) {}

  ngOnInit(): void {}

  childData:string='';
  searchText:string='';
  onSearchTextEntered(searchValue:string){ 
    this.searchText=searchValue;
    console.log(this.searchText);
  }

  @Output()
  searchTextChanged2 :EventEmitter<string>= new EventEmitter<string>();

  sendData(){
    this.searchTextChanged2.emit(this.searchText);
  }
  filteredByCategory(event:any)
  {
    this.productService.filteredItemsByCategory(event.innerText);
  }


}
