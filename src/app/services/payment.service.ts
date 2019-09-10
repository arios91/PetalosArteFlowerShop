import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DiscountsService } from './discounts.service';
import { ArrangementService } from './arrangement.service';
import { Discount } from '../models/Discounts';
import { Arrangement } from '../models/Arrangement';


@Injectable()
export class PaymentService {

    constructor(
        private http: Http,
        private flashMessage: FlashMessagesService,
        private router: Router,
        private discountService: DiscountsService,
        private arrangementService: ArrangementService
    ) {}

    processPayment(token: any, amount, email, description, emailBody, newDiscount:Discount, currentDiscount:Discount, discountApplied:boolean, products:Arrangement[]){
        // this.http.post('/charge',
        this.http.post('http://localhost:8080/charge',
        {
            stripeToken: token.id,
            stripeEmail: email,
            amount,
            description,
            emailBody
        },)
        .subscribe(resp => {
            if(resp.status == 200){
                console.log('charged');
                //create a new discount code
                this.discountService.addDiscountCode(newDiscount);
                
                //check if a discount was used, and remove it
                if(discountApplied){
                    this.discountService.invalidateDiscount(currentDiscount);
                }
                
                //update product popularity
                for(let product of products){
                    this.arrangementService.increaseArrangementPopularity(product);
                }
                this.router.navigate(['receipt']);
            }
        }, err => {
            this.flashMessage.show('Error occured while processing your order, please try again...if the problem persists please contact us at petalosArteFlowerShop@gmail.com', {
                cssClass: 'alert-danger', timeout: 10000
            });
        })
    }

}
