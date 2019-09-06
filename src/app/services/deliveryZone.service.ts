import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeliveryZone } from '../models/DeliveryZone';
import { map } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable()
export class DeliveryZoneService {
  deliveryZonesCollection: AngularFirestoreCollection<DeliveryZone>;
  deliveryZoneDoc: AngularFirestoreDocument<DeliveryZone>;
  deliveryZones: Observable<DeliveryZone[]>;
  deliveryZone: Observable<DeliveryZone>;


  constructor(private afs: AngularFirestore) {
    this.deliveryZonesCollection = this.afs.collection('deliveryZones');
  }

  getZones(): Observable<DeliveryZone[]>{
    //get zones with id
    this.deliveryZones = this.deliveryZonesCollection.snapshotChanges().pipe(
      map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as DeliveryZone;
            data.id = action.payload.doc.id;
            return data;
          });
        })
    );
    return this.deliveryZones;
  }

  getZone(id: string):Observable<DeliveryZone>{
    this.deliveryZoneDoc = this.afs.doc<DeliveryZone>(`deliveryZones/${id}`);

    this.deliveryZone = this.deliveryZoneDoc.snapshotChanges().pipe(
      map(action => {
        if(action.payload.exists === false){
          return null;
        }else{
          const data = action.payload.data() as DeliveryZone;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.deliveryZone;
  }
}
