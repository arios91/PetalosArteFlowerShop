import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class ContactService {

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
  ) {}

  sendContactEmail(customerEmail:string, textBody:string, emailBody:string){
    this.http.post('http://localhost:8080/sendEmail',
    {
      customerEmail,
      recipientEmail: 'contact',
      subject: 'Contact Request',
      textBody,
      emailBody
    },)
    .subscribe(resp => {
      if(resp.status == 200){
        this.flashMessage.show("Thank you for your inquiry! We'll get back to you shortly.", {
            cssClass: 'alert-success', timeout: 10000
        });
      }
    }, err => {
        this.flashMessage.show('Error occured while processing your order, please try again...if the problem persists please contact us at petalosArteFlowerShop@gmail.com', {
            cssClass: 'alert-danger', timeout: 10000
        });
    })
  }

}
