import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'my-app';

 
  AddproductName : product[]=[];

  check = true;
  // Onlistadded(listitem: product) {
  //   if (!this.AddproductName.includes(listitem)) {
  //     // listitem.mount = 1;
  //     // this.AddproductName.push(listitem);
    
  //   } else {
  //     // listitem.mount ? listitem.mount++ : listitem.mount;
  //   }
   
 
  // }
  
 
}


