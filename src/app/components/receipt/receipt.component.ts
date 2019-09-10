import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Discount } from 'src/app/models/Discounts';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  receipt:any;
  discount:Discount;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.receipt = this.cartService.getReceipt();
    this.discount = this.cartService.getDiscount();
    this.cartService.clearReceipt();
  }

}