import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Addon } from '../models/Addon';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable()
export class AddonService {
  addonsCollection: AngularFirestoreCollection<Addon>;
  addonDoc: AngularFirestoreDocument<Addon>;
  addons: Observable<Addon[]>;
  addon: Observable<Addon>;


  constructor(private afs: AngularFirestore) {
    this.addonsCollection = this.afs.collection('addons');
  }

  getAddons(): Observable<Addon[]>{
    //get addons with id
    this.addons = this.addonsCollection.snapshotChanges().pipe(
      map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as Addon;
            data.id = action.payload.doc.id;
            return data;
          });
        })
    );
      return this.addons;
  }

  getAddon(id: string):Observable<Addon>{
    this.addonDoc = this.afs.doc<Addon>(`addons/${id}`);

    this.addon = this.addonDoc.snapshotChanges().pipe(
      map(action => {
        if(action.payload.exists === false){
          return null;
        }else{
          const data = action.payload.data() as Addon;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.addon;
  }
}
