import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TextMaskModule } from 'angular2-text-mask';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArrangementsComponent } from './components/arrangements/arrangements.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { AwayDatesService } from './services/awayDate.service';
import { AddonService } from './services/addon.service';
import { SeoService } from './services/seo.service';
import { ArrangementService } from './services/arrangement.service';
import { CartService } from './services/cart.service';
import { DiscountsService } from './services/discounts.service';
import { PaymentService } from './services/payment.service';
import { DeliveryZoneService } from './services/deliveryZone.service';
import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArrangementsComponent,
    CartComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ReceiptComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'paFlowerShop'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    TextMaskModule,
    MyDatePickerModule,
    HttpModule,
  ],
  providers: [
    AddonService,
    AwayDatesService,
    SeoService,
    ArrangementService,
    CartService,
    DiscountsService,
    PaymentService,
    DeliveryZoneService,
    CurrencyPipe,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
