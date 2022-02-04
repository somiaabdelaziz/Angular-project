import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product_feature/product-details/product-details.component';
import { ProductListComponent } from './core/product_feature/product-list/product-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductFormComponent } from './core/product_feature/product-form/product-form.component';  
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {path: '', component:ProductListComponent},
  {path: 'home',component:ProductListComponent},
  {path: 'product', children:[
    {path: 'list', component:ProductListComponent},
    { path: 'details/:id', component: ProductDetailsComponent },
    { path:'add', component:ProductFormComponent },
    { path: 'edit/:id', component:ProductFormComponent }
  ]},
  {path:'login',component:LoginComponent},
  { path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
