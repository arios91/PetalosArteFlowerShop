import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AwayDate } from '../models/AwayDate';
import { map } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable()
export class AwayDatesService {
  awayDatesCollection: AngularFirestoreCollection<AwayDate>;
  awayDatesDoc: AngularFirestoreDocument<AwayDate>;
  awayDates: Observable<AwayDate[]>;


  constructor(private afs: AngularFirestore) {
    this.awayDatesCollection = this.afs.collection('awayDates');
  }

  getDates(): Observable<AwayDate[]>{
    this.awayDates = this.awayDatesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as AwayDate;
          data.id = action.payload.doc.id;
          return data;
        })
      })
    );
    return this.awayDates;
  }
}
