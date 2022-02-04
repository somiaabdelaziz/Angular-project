import { AllProductResponse, product, productWithCounter } from 'src/app/_models/product/product.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
 
@Injectable({
  providedIn:'root'
})

export class productServices {


  // productArray: product[] = [

  //   // {
  //   //   id: 1,
  //   //   data: [{ name: 'camera', description: 'anything', lang: { name: 'arabic' } }],
  //   //   category: [{ id:1,name: 'food'}],
  //   //   tags: [{ name: 'food' }],
  //   //   paymentTypes: [{ name: 'COD' }],
  //   //   price: 12300,
  //   //   dicount: 100,
  //   //   imageSrc: 'https://picsum.photos/200/307'

  //   // },
  //   // {
  //   //   data: [{ name: 'camera', description: 'anything', lang: { name: 'arabic' } }],
  //   //   category: [{id:1, name: 'food' }],
  //   //   tags: [{ name: 'food' }],
  //   //   paymentTypes: [{ name: 'COD' }],
  //   //   price: 12300,
  //   //   dicount: 100,
  //   //   imageSrc: 'https://picsum.photos/205/307'

  //   // },
  //   // {
  //   //   id: 3,
  //   //   data: [{ name: 'camera', description: 'anything', lang: { name: 'arabic' } }],
  //   //   category: [{ id:1,name: 'food' }],
  //   //   tags: [{ name: 'food' }],
  //   //   paymentTypes: [{ name: 'COD' }],
  //   //   price: 12300,
  //   //   dicount: 100,
  //   //   imageSrc: 'https://picsum.photos/2007/307'

  //   // },
  //   // {
  //   //   id: 4,
  //   //   data: [{ name: 'camera', description: 'anything', lang: { name: 'arabic' } }],
  //   //   category: [{id:1, name: 'food' }],
  //   //   tags: [{ name: 'food' }],
  //   //   paymentTypes: [{ name: 'COD' }],
  //   //   price: 12300,
  //   //   dicount: 100,
  //   //   imageSrc: 'https://picsum.photos/200/300'

  //   // },
  //   // {
  //   //   id: 5,
  //   //   data: [{ name: 'camera', description: 'anything', lang: { name: 'arabic' } }],
  //   //   category: [{id:1, name: 'food' }],
  //   //   tags: [{ name: 'food' }],
  //   //   paymentTypes: [{ name: 'COD' }],
  //   //   price: 12300,
  //   //   dicount: 100,
  //   //   imageSrc: 'https://picsum.photos/200/301'

  //   // },
  //   // {
  //   //   id: 6,
  //   //   data: [{ name: 'camera', description: 'anything', lang: { name: 'arabic' } }],
  //   //   category: [{ id:1,name: 'food' }],
  //   //   tags: [{ name: 'food' }],
  //   //   paymentTypes: [{ name: 'COD' }],
  //   //   price: 12300,
  //   //   dicount: 100,
  //   //   imageSrc: 'https://picsum.photos/200/309'

  //   // },
  //   // {
  //   //   id: 7,
  //   //   data: [{ name: 'camera', description: 'anything', lang: { name: 'arabic' } }],
  //   //   category: [{ id:1,name: 'food' }],
  //   //   tags: [{ name: 'food' }],
  //   //   paymentTypes: [{ name: 'COD' }],
  //   //   price: 12300,
  //   //   dicount: 100,
  //   //   imageSrc: 'https://picsum.photos/206/304'

  //   // },
  //   // {
  //   //   id: 8,
  //   //   data: [{ name: 'camera', description: 'anything', lang: { name: 'arabic' } }],
  //   //   category: [{ id:1,name: 'food' }],
  //   //   tags: [{ name: 'food' }],
  //   //   paymentTypes: [{ name: 'COD' }],
  //   //   price: 12300,
  //   //   dicount: 100,
  //   //   imageSrc: 'https://picsum.photos/208/300'

  //   // }
  // ];

  total:number=0;

  constructor(private httpClient : HttpClient) {
   this.getAllProduct().subscribe(
     (res)=>{this.productArray=res.product;console.log(this.productArray); },
     (err)=>{console.log(err)}
   )
  }
  private cartArray: productWithCounter[] = [];
  cardHasBeenChanged: EventEmitter<productWithCounter[]> = new EventEmitter<productWithCounter[]>();
  productArray:product[]=[];
  itemName:string='';

  getAllProduct(): Observable<AllProductResponse> {
    const headers = new HttpHeaders(
      {authorization:sessionStorage.getItem('token')!}
    )
    return this.httpClient.get<AllProductResponse>(environment.baseUrl +'product');
  };
 

  getProductsArray(){
    return this.productArray;
  }

  getProductById(id:number) { 
    console.log(this.productArray.find(product=>product._id===id))
    return this.productArray.find(product=>product._id===id);
  };

  addProduct(product: product): void {
    this.productArray.push(product)
  };

  deleteProduct(product: product) {}
  updateProduct() { };  


addProductForCard(product: product) {
  console.log(product.price);
  var accepted :boolean;
  accepted=false;
  this.cartArray.some(function (el) {
     
    if (el._id === product._id)
    {
      el.counter ? el.counter++ : el.counter;
      console.log(el.counter);
      accepted=true;
    }
  });

    if (accepted===false){
      const newProduct: productWithCounter = { ...product, counter: 1 };
      this.cartArray.push(newProduct);
      this.cardHasBeenChanged.emit(this.cartArray);
      console.log(newProduct)
    }
    
  console.log(this.cartArray);
  console.log(product._id);

}

calculateTotalOfCart(){
  this.total=0;
  this.cartArray.forEach((ele)=>{
  this.total+=(ele.price-ele.discount!);
    
  })
  console.log("this is the total")
  console.log(this.total);
  return this.total;
}

getFilterValue(name:string)
{ 
  this.itemName=name;
}

deletItemFromList(deletedItem:product)
{
  console.log(this.productArray.length);
  console.log(deletedItem);
  this.productArray = this.productArray.filter(function(item){
    return item._id !== deletedItem._id;
  });
  alert("it's deleted and you can check the console")
  console.log("the length already changed,if you try to delete the same product it won't delete")
  console.log(this.productArray.length);
}
filteredItemsByCategory(categoryName:string){
  console.log(categoryName.trim());
  console.log("it's filtered but it doesn't run with the dynamic data because of the categories name are not the same ");
  this.productArray = this.productArray.filter(function(item){
    return item.category[0].name !== categoryName;
  });

}


}
