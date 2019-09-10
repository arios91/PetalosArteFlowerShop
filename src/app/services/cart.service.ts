import { Injectable } from '@angular/core';
import { Arrangement } from '../models/Arrangement';
import { Discount } from '../models/Discounts';

@Injectable()
export class CartService {
  selectedArrangements:Arrangement[] = [];
  receipt:any;
  discount:Discount;

  constructor() { }

  getCart(): Arrangement[]{
    return this.selectedArrangements;
  }

  addToCart(item:Arrangement){
    for(let addons of item.selectedAddons){
      item.price += addons.price;
    }
    this.selectedArrangements.unshift(item);
  }
  
  removeFromCart(item:Arrangement){
    var index = this.selectedArrangements.indexOf(item,0);
    if(index > -1){
      this.selectedArrangements.splice(index,1);
    }
  }

  setReceiptInfo(receipt:any, discount:Discount){
    this.receipt = receipt;
    this.discount = discount;
  }
  getReceipt(){
    return this.receipt;
  }
  getDiscount(){
    return this.discount;
  }

  clearReceipt(){
    this.receipt = '';
    this.discount = {};
  }
  
  clearCart(){
    this.selectedArrangements = [];
  }


}
