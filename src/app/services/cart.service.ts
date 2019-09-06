import { Injectable } from '@angular/core';
import { Arrangement } from '../models/Arrangement';

@Injectable()
export class CartService {
  selectedArrangements:Arrangement[] = [];
  receipt:any;

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

  setReceipt(receipt:any){
    this.receipt = receipt;
  }

  getReceipt(){
    return this.receipt;
  }

  clearReceipt(){
    this.receipt = '';
  }
  
  clearCart(){
    this.selectedArrangements = [];
  }


}
