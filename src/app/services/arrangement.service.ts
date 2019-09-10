import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Arrangement} from '../models/Arrangement';
import { Addon} from '../models/Addon';
import { AddonService } from './addon.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable()
export class ArrangementService{
  arrangementsCollection: AngularFirestoreCollection<Arrangement>;
  arrangementDoc: AngularFirestoreDocument<Arrangement>;
  arrangements: Observable<Arrangement[]>;
  arrangement: Observable<Arrangement>;
  addonsMap = new Map();


  constructor(
    private afs: AngularFirestore,
    private addonService: AddonService,
  ) {
    this.arrangementsCollection = this.afs.collection('arrangements', ref => ref.where('active', '==', true));
  }

  getArrangements(): Observable<Arrangement[]>{
    //get addons first and create map
    this.createAddonsMap();
    //get arrangements with id
    this.arrangements = this.arrangementsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Arrangement;
          data.id = action.payload.doc.id;
          this.setAddons(data);
          return data;
        });
      })
    );
    return this.arrangements;
  }

  getArrangement(id: string):Observable<Arrangement>{
    this.createAddonsMap();
    this.arrangementDoc = this.afs.doc<Arrangement>(`arrangements/${id}`);
    this.arrangement = this.arrangementDoc.snapshotChanges().pipe(
      map(action => {
        if(action.payload.exists === false){
          return null;
        }else{
          const data = action.payload.data() as Arrangement;
          data.id = action.payload.id;
          this.setAddons(data);
          return data;
        }
      })
    );
    return this.arrangement;
  }
  /////
  //snippet for updating a document
  /////
  increaseArrangementPopularity(product:Arrangement){
    this.arrangementsCollection.doc(product.id).update({
      popularity: product.popularity + 1
    })
  }
  
  createAddonsMap(){
    this.addonService.getAddons().subscribe(addons =>{
      for(let item of addons){
        item.inCart = false;
        this.addonsMap.set(item.name, item);
      }
    });
  }

  setAddons(product){
    product.availableAddons = [];
    product.selectedAddons = [];
    if(product.addonNames != null){
      for(let name of product.addonNames){
        if(this.addonsMap.has(name)){
          product.availableAddons.unshift(this.addonsMap.get(name));
        }
      }
    }
  }
}
