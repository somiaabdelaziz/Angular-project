import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { testOneComponent } from "./test_one_component/testOneComponent";
import { TestFromCliComponent } from './test-from-cli/test-from-cli.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './core/product_feature/product-item/product-item.component';
import { ProductListComponent } from './core/product_feature/product-list/product-list.component';
import { ProductFilterComponent } from './core/product_feature/product-filter/product-filter.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { productServices } from './_sevices/product/product.services';
import { ProductDetailsComponent } from './core/product_feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product_feature/product-form/product-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './shared/login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchComponent } from './core/product_feature/search/search.component';
 

@NgModule({
  declarations: [
    AppComponent,
     testOneComponent,
     TestFromCliComponent,
     NavbarComponent,
     ProductItemComponent,
     ProductListComponent,
     ProductFilterComponent,
     DropdownComponent,
     ProductDetailsComponent,
     ProductFormComponent,
     NotFoundComponent,
     LoginComponent,
     SearchComponent,
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule,
     NgxPaginationModule
   
  ],
  providers: [productServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
 