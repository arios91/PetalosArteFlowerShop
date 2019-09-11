import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { DeliveryZoneService } from '../../services/deliveryZone.service';
import { PaymentService } from '../../services/payment.service';
import { environment } from '../../../environments/environment';
import { Arrangement } from '../../models/Arrangement';
import { Customer } from '../../models/Customer';
import { DeliveryZone } from '../../models/DeliveryZone';
import { Address } from '../../models/Address';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CurrencyPipe } from '@angular/common';
import {IMyDpOptions, IMyDate} from 'mydatepicker';
import { SeoService } from '../../services/seo.service';
import { DiscountsService } from '../../services/discounts.service';
import { ArrangementService } from '../../services/arrangement.service';
import { Discount } from '../../models/Discounts';
import { AwayDate } from '../../models/AwayDate';
import { AwayDatesService } from '../../services/awayDate.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  date: Date = new Date();
  currentYear:number = this.date.getFullYear();
  currentMonth:number = this.date.getMonth() + 1;
  currentDay:number = this.date.getDate();
  taxPercentage:number = .0825;
  discountChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  discountCodes : Discount[];
  currentDiscount: Discount;
  newDiscount: Discount;
  discountApplied: boolean = false;
  awayDate: AwayDate = {};
  //cut off time in 24 hour format
  //currently the cutoff time for same-day delivery is 1pm (13)
  cutoffTime: number = 13;
  afterCutoffTime:boolean = this.date.getHours() >= this.cutoffTime;


  products: Arrangement[] = [];
  description: string = '';
  deliveryZones: DeliveryZone[] = [];
  deliveryOption: string = 'delivery';
  discount: number = 0;
  subTotal: number = 0;
  taxes: number = 0;
  totalPrice: number = 0;
  stripeTotal: number = 0;
  cardMessage: string = '';
  phoneMask: any[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  orderEmail: string = '';
  receipt: string = '';
  specialInstructions: string = '';
  userDiscountCode: string = '';

  handler: any;
  
  deliveryZone: DeliveryZone = {price:0};
  // deliveryDate:any;
  customer:  Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  }
  recipient: Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  }
  shippingAddr: Address = {
    lineOne: '',
    lineTwo: '',
    city: '',
    state: 'TX',
    zip: ''
  }

  dateOptions: IMyDpOptions = {
    // other options...
    minYear: this.currentYear,
    yearSelector: false,
    showClearDateBtn: false,
    showTodayBtn: false,
    disableUntil: {
      year: this.currentYear,
      month: this.currentMonth,
      day: this.afterCutoffTime ? this.currentDay : this.currentDay-1
    },
    dateFormat: 'mm-dd-yyyy',
    //use this to disable specific days, good for when going on vacation

    // Disable single dates one by one. Array of disabled dates.
    // For example: [{year: 2016, month: 11, day: 14}, {year: 2016, month: 1, day: 15}].
    // To reset existing disableDays value set empty array to it.

    //currently set to disable first of january 2018 as template
    disableDays: [
      {
        year: 2018,
        month: 1,
        day: 1
      }
    ],
    
    //use this to disable date ranges, good for when going on vacation

    // Disable date ranges
    // For example: [{begin: {year: 2016, month: 11, day: 14}, end: {year: 2016, month: 11, day: 20}}]
    // To reset existing disableDays value set empty array to it.

    //currently set to disable january to february 2017 as template
    disableDateRanges: [{
      begin:{
        year: 2017,
        month: 1,
        day: 1
      },
      end:{
        year: 2017,
        month: 1,
        day: 1
      }
    }]
  };

  deliveryDate: any = { date: {
    year: this.currentYear,
    month: this.currentMonth,
    day: this.afterCutoffTime ? this.currentDay + 1 : this.currentDay,
  }};

  @ViewChild('paymentForm', {static: false}) form: any;

  constructor(
    private paymentService: PaymentService,
    private cartService: CartService,
    private deliverZonesService: DeliveryZoneService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private currency: CurrencyPipe,
    private seo : SeoService,
    private discountService: DiscountsService,
    private arrangementService: ArrangementService,
    private awayDatesService: AwayDatesService
  ) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Petalos y Arte Flower Shop - Cart',
      description: 'Cart, we are a local flower shop in Mission Texas offering floral arrangement delivery to the Mission, Palmview, McAllen, Edinburg, Pharr, La Joya areas of the Rio Grande Valley'
    });
    this.awayDatesService.getDates().subscribe(awayDates => {
      if(awayDates !== null && awayDates.length > 0){
        this.awayDate = awayDates[0];
        if(new Date() > this.awayDate.endDate){
          this.awayDate.active = false;
        }
        if(this.awayDate.active){
          this.dateOptions.disableDateRanges[0].begin.year = this.awayDate.beginDate.getFullYear();
          this.dateOptions.disableDateRanges[0].begin.month = this.awayDate.beginDate.getMonth() +1;
          this.dateOptions.disableDateRanges[0].begin.day = this.awayDate.beginDate.getDate();
          this.dateOptions.disableDateRanges[0].end.year = this.awayDate.endDate.getFullYear();
          this.dateOptions.disableDateRanges[0].end.month = this.awayDate.endDate.getMonth() + 1;
          this.dateOptions.disableDateRanges[0].end.day = this.awayDate.endDate.getDate();

          if(this.date > this.awayDate.beginDate && this.date < this.awayDate.endDate){
            let tmpDate = new Date(this.awayDate.endDate.getTime() + (1000 * 60 * 60 * 24));
            this.deliveryDate = {date: {
              year: tmpDate.getFullYear(),
              month: tmpDate.getMonth() + 1,
              day: tmpDate.getDate()
            }};
          }
        }
      }
    });
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: token => {
        this.setConfirmationNumber(token.card.id);
        this.paymentService.processPayment(
          token,
          this.stripeTotal,
          this.customer.email,
          this.description,
          this.orderEmail,
          this.newDiscount,
          this.currentDiscount,
          this.discountApplied,
          this.products
        );
        this.cartService.clearCart();
        this.cartService.setReceiptInfo(this.receipt, this.newDiscount);
      }
    });

    this.products = this.cartService.getCart();
    this.deliverZonesService.getZones().subscribe(deliveryZones =>{
      this.deliveryZones = deliveryZones;
    });

    this.discountService.getDiscounts().subscribe(discounts =>{
      this.discountCodes = discounts;
    })
    this.calculateSubTotal();
  }

  handlePayment(){
    this.handler.open({
      name: 'Petalos y Arte Flower Shop',
      description: this.description,
      email: this.customer.email,
      allowRememberMe: false,
      amount: this.stripeTotal,
      zipCode: true,
    });
  }

  @HostListener('window:popstate')
  onpopstate(){
    this.handler.closer();
  }

  toggleDeliveryOption(){
    if(this.deliveryOption === 'pickup'){
      this.shippingAddr = {};
      this.deliveryZone = {price: 0}
      this.calculateGrandTotal();
    }else if(this.deliveryOption === 'delivery'){
    }
  }
  
  removeProduct(product:Arrangement){
    this.cartService.removeFromCart(product);
    let tmpArr = [];
    for(let tmpProduct of this.products){
      if(tmpProduct.id !== product.id){
        tmpArr.push(tmpProduct);
      }
    }
    this.products = tmpArr;
    this.calculateSubTotal();
  }
  
  calculateSubTotal(){
    this.subTotal = 0;
    for(let product of this.products){
      this.subTotal += product.price;
    }
    this.calculateGrandTotal();
  }

  calculateShipping(){
    var found:boolean = false;
    for(let city of this.deliveryZones){
      if(city.active){
        for(let zip of city.zips){
          if(this.shippingAddr.zip == zip.toString()){
            this.deliveryZone = city;
            found = true;
            break;
          }
        }
      }
    }
    if(!found){
      this.deliveryZone = {
        price: 0 
      };
    }
    this.calculateGrandTotal();
  }

  calculateGrandTotal(){
    this.taxes = this.subTotal * this.taxPercentage;
    this.taxes = Number(this.taxes.toFixed(2));
    this.totalPrice = this.subTotal + this.deliveryZone.price + this.taxes;
    this.stripeTotal = this.totalPrice * 100;
    this.stripeTotal = Number(this.stripeTotal.toFixed());
    if(this.products.length == 1){
      this.description = this.products[0].name;
    }else{
      var counter = 1;
      for(let product of this.products){
        this.description = `product ${counter}: ${product.name}, `;
        counter++;
      }
    }
  }

  addDiscountCode(){
    for(let discount of this.discountCodes){
      if(discount.name === this.userDiscountCode && discount.active){
        this.currentDiscount = discount;
        this.discount = this.subTotal * (discount.discount / 100);
        this.subTotal -= this.discount;
        this.calculateGrandTotal();
        this.discountApplied = true;
      }
    }
    if(!this.discountApplied){
      this.flashMessage.show('Invalid Promo Code', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else{
      this.flashMessage.show('Promo Code Applied', {
        cssClass: 'alert-success', timeout: 4000
      });
    }
  }
  removeDiscountCode(){
    this.currentDiscount = null;
    this.subTotal += this.discount;
    this.discount = 0;
    this.discountApplied = false;
    this.calculateGrandTotal();
  }
  
  onSubmit({value, valid}){
    if(!valid){
      this.flashMessage.show('Invalid form input, please correct and try again', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else if(!this.validEmail(this.customer.email)){
      this.flashMessage.show('Invalid email input, please input a valid email', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else if(!this.validZip(this.shippingAddr.zip)){
      this.flashMessage.show('Sorry, the selected city is outside of our current delivery range', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else if(!this.validDeliveryDate()){
      this.flashMessage.show('Invalid Delivery Date', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else{
      var discountCode = "";
      var discountAmount;
      
      for (var i = 0; i < 7; i++){
        discountCode += this.discountChars.charAt(Math.floor(Math.random() * this.discountChars.length));
      }

      if(this.totalPrice > 149){
        discountAmount = 15;
      }else if(this.totalPrice > 99){
        discountAmount = 10;
      }else if(this.totalPrice){
        discountAmount = 5;
      }

      
      this.newDiscount = {
        name: discountCode,
        discount : discountAmount,
        active: true
      };

      this.buildOrderEmail(this.newDiscount);
      this.buildReceipt(this.newDiscount);
      this.handlePayment();
    }
    
  }

  validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validZip(selectedZip:string){
    if(this.deliveryOption === 'pickup'){
      return true;
    }
    for(let city of this.deliveryZones){
      if(city.active){
        for(let zip of city.zips){
          if(selectedZip == zip.toString()){
            return true;
          }
        }
      }
    }
    
    return false;
  }

  validDeliveryDate(){
    if(this.deliveryDate == null){
      return false;
    }
    return true;
  }

  buildReceipt(discount:Discount){
    this.receipt = this.getDeliveryDateInfo();
    this.receipt += this.getDeliveryPersonInfo();
    this.receipt += this.getOrderInfo();
    this.receipt += this.getAdditionalInfo();
  }

  buildOrderEmail(discount:Discount){
    this.orderEmail = this.getDeliveryDateInfo();
    this.orderEmail += this.getDeliveryPersonInfo();
    this.orderEmail += this.getContactPersonInfo();
    this.orderEmail += this.getOrderInfo();
    this.orderEmail += this.getAdditionalInfo();
    this.orderEmail += this.getDiscountInfo(discount);
  }

  getDeliveryDateInfo(){
    var deliveryDateString: String = "";
    if(this.deliveryOption === "pickup"){
      deliveryDateString = "Pickup";
    }else if(this.deliveryOption === "delivery"){
      deliveryDateString = `${this.deliveryDate.date.month}/${this.deliveryDate.date.day}/${this.deliveryDate.date.year}`;
    }
    let deliveryDateInfo = `
    <table style="width: 90%;" align="center">
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Delivery Date:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${deliveryDateString}</td>
    </tr>`

    return deliveryDateInfo;
  }

  getDeliveryPersonInfo(){
    let deliveryInfo = '';
    if(this.deliveryOption === "delivery"){
      deliveryInfo = `
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Deliver To:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.recipient.firstName} ${this.recipient.lastName}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Street Address:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.shippingAddr.lineOne}<br/>${this.shippingAddr.lineTwo}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">City, State, Zip:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.shippingAddr.city}, ${this.shippingAddr.state} ${this.shippingAddr.zip}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Phone:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.recipient.phone}</td>
      </tr>`;
    }else if(this.deliveryOption === "pickup"){
      deliveryInfo += `
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">For:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.recipient.firstName} ${this.recipient.lastName}</td>
      </tr>
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Phone:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.recipient.phone}</td>
      </tr>`;
    }

    return deliveryInfo;
  }

  getContactPersonInfo(){
    let contactInfo =
    `<tr>
      <td>
        <br/>
      </td>
    </tr>
  
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Customer Name:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customer.firstName} ${this.customer.lastName}</td>
    </tr>
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Customer Phone:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customer.phone}</td>
    </tr>
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Customer Email:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${this.customer.email}</td>
    </tr>
  
    <tr>
      <td>
        <br/>
      </td>
    </tr>`;

    return contactInfo;
  }

  getOrderInfo(){
    let orderInfo = '';

    for(let product of this.products){
      orderInfo += `
      <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Product Details:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${product.name}</td>
      </tr>`;
      for(let addon of product.selectedAddons){
        orderInfo += `
        <tr>
          <td style="width: 25%; text-align:right; font-weight: bold;">Addons:</td>
          <td style="width: 75%; text-align:left; padding-left: 25px;">${addon.name}</td>
        </tr>`;
      }
    }

    orderInfo += `
    <tr>
    <td style="width: 25%; text-align:right; font-weight: bold;">Total Price:</td>
    <td style="width: 75%; text-align:left; padding-left: 25px;">${this.currency.transform(this.totalPrice)}</td>
    </tr>`;

    return orderInfo;
  }

  getAdditionalInfo(){
    let info = '';
    if(this.deliveryOption === "delivery"){
      info += `
        <tr>
          <td>
            <br/>
          </td>
        </tr>
        `
      if(this.cardMessage !== ''){
        info += `
        <tr>
          <td style="width: 25%; text-align:right; font-weight: bold;">Card Message:</td>
          <td style="width: 75%; text-align:left; padding-left: 25px;">${this.cardMessage}</td>
        </tr>
        `;
      }
      if(this.specialInstructions !== ''){
        info += `
        <tr>
        <td style="width: 25%; text-align:right; font-weight: bold;">Special Instructions:</td>
        <td style="width: 75%; text-align:left; padding-left: 25px;">${this.specialInstructions}</td>
        </tr>
        `;
      }
    }
    return info;
  }

  getDiscountInfo(discount:Discount){
    let info = `
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Discount Code:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${discount.name}</td>
    </tr>
    <tr>
      <td style="width: 25%; text-align:right; font-weight: bold;">Discount Amount:</td>
      <td style="width: 75%; text-align:left; padding-left: 25px;">${discount.discount}%</td>
    </tr>`
    
    return info;
  }

  setConfirmationNumber(cardId:string){
    var cardToken = cardId.substring(cardId.length - 6, cardId.length);
    this.orderEmail += this.closeTable(cardToken);
    this.receipt += this.closeTable(cardToken);
  }

  closeTable(cardToken){
    let info = `
    <tr>
      <td style="width: 25%; font-weight: bold; text-align:right;">Confirmation Code:</td>
      <td style="width: 75%; text-align:left;">${cardToken}</td>
    </tr>
    </table>`
    return info;
  }


}
