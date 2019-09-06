import { Injectable } from '@angular/core';
import { Discount } from '../models/Discounts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable()
export class DiscountsService {
  discountsCollection: AngularFirestoreCollection<Discount>;
  discountsDoc: AngularFirestoreDocument<Discount>;
  discounts: Observable<Discount[]>;
  discount: Observable<Discount>;
  disc: Discount[];

  constructor(
    private afs: AngularFirestore
  ) {
    this.discountsCollection = this.afs.collection('discounts');
  }

  addDiscountCode(newDiscount:Discount){
    console.log(JSON.stringify(newDiscount));
    this.discountsCollection.add(newDiscount)
    .then(success =>{
      console.log('successfully added discount code');
    })
    .catch(err => {
      console.log('error adding discount');
      console.log(err);
    });
  }

  getDiscounts(): Observable<Discount[]>{
    this.discounts = this.discountsCollection.snapshotChanges().pipe(
      map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as Discount;
            data.id = action.payload.doc.id;
            return data;
          });
        })
    )
    return this.discounts;
  }

  removeDiscount(discount:Discount){
    this.discountsCollection.doc(discount.id).delete();
  }

}
