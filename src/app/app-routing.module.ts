import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {ViewProductComponent} from './components/view-product/view-product.component';
import {CartComponent} from './components/cart/cart.component';
import {ReceiptComponent} from './components/receipt/receipt.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ViewProductComponent},
  {path: 'cart', component: CartComponent},
  {path:'receipt', component: ReceiptComponent},
  {path:'contact', component: ContactComponent},
]

@NgModule({
  exports: [
    RouterModule
  ],

  imports: [
    RouterModule.forRoot(routes)
  ],

  declarations: [

  ]
})
export class AppRoutingModule { }
