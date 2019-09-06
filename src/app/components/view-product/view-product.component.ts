import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ArrangementService } from '../../services/arrangement.service';
import { CartService } from '../../services/cart.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import { Arrangement } from '../../models/Arrangement';
import { Addon } from '../../models/Addon';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  id:string;
  product: Arrangement;
  productMessage:string = "";
  totalPrice:number;
  display:string = 'none';
  orderedBalloons:boolean = false;


  constructor(
    private arrangementService: ArrangementService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    //get id from url
    this.id = this.route.snapshot.params['id'];
    //get arrangement
    this.arrangementService.getArrangement(this.id).subscribe(arrangement =>{
      this.product = arrangement;
      this.totalPrice = arrangement.price;
    })
  }

  addItem(item:Addon){
    item.inCart = true;
    if(item.name === "balloon"){
      this.orderedBalloons = true;
    }
    this.product.selectedAddons.unshift(item);
    this.totalPrice += item.price;
  }
  
  removeItem(item:Addon){
    var index = this.product.selectedAddons.indexOf(item,0);
    if(index > -1){
      if(item.name === "balloon"){
        this.orderedBalloons = false;
      }
      item.inCart = false;
      this.product.selectedAddons.splice(index,1);
      this.totalPrice -= item.price;
    }
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.display='block';
  }

  closeModal(){
    this.display='none';
  }
}
