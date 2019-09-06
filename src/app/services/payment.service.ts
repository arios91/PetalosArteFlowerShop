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
        //create post request to API
        //send variables as body
        // console.log('creating discount');

        // this.discountService.addDiscountCode(newDiscount);
        // if(discountApplied){
        //     console.log('removing discount');
        //     this.discountService.removeDiscount(currentDiscount);
        // }
        // }
        // this.http.post('https://firestore.googleapis.com/v1/projects/petalos-arte/databases/(default)/documents/discounts?documentId=apiTest6&key=AIzaSyAsDbkDi1OAeJgWzGgtZpv2IgaazPw8qZ4',
        // {
        //     name: 'apiTest6',
        //     discount : '50',
        //     active: true
        // }
        this.http.post('https://firestore.googleapis.com/v1/projects/petalos-arte/databases/(default)/documents/discounts?documentId=apiTest10&key=AIzaSyAsDbkDi1OAeJgWzGgtZpv2IgaazPw8qZ4',
        {"fields":{"name":{"stringValue":"apiTest10"},"discount":{"integerValue":"20"},"active":{"booleanValue":true}}}
        ).subscribe(resp => {
            if(resp.status == 200){
                console.log('pass');
            }
        }, err => {
            console.log('error');
            console.log(err);
        });

        // this.http.post('/charge',
        // {
        //     stripeToken: token.id,
        //     stripeEmail: email,
        //     amount,
        //     description,
        //     emailBody
        // },)
        // .subscribe(resp => {
        //     if(resp.status == 200){
        //         //create a new discount code

        //         //check if a discount was used, and remove it

        //         //update product popularity
        //         for(let product of products){
        //             this.arrangementService.updateArrangementPopularity(product);
        //         }
        //         this.router.navigate(['receipt']);
        //     }
        // }, err => {
        //     this.flashMessage.show('Error occured while processing your order, please try again...if the problem persists please contact us at petalosArteFlowerShop@gmail.com', {
        //         cssClass: 'alert-danger', timeout: 10000
        //     });
        // })
    }

}
