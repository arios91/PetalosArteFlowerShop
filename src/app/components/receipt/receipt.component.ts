import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  receipt:any;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.receipt = this.cartService.getReceipt();
    this.cartService.clearReceipt();
  }

}