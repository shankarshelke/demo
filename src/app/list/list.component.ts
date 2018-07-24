import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated/firebase_list_observable';
import * as firebase from 'firebase/app';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes'
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuthModule } from 'angularfire2/auth';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  hero:Hero={
    id:1,
    name:'Windstorm'

};
  ngOnInit() {
  }

  heroes=HEROES;

selectedHero:Hero;
onSelect(hero:Hero):void{
  this.selectedHero=hero;
}
items: Observable<any[]>;
constructor(db: AngularFirestore) {
  this.items = db.collection('shankar').valueChanges();
 
}
}
