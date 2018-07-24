import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { FirebaseListObservable,} from 'angularfire2/database-deprecated/firebase_list_observable';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Database } from '@firebase/database/dist/esm/src/api/Database';
import { firebase } from '@firebase/app';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']

})
export class HeroDetailComponent implements OnInit {

  //items: any;
name: any;
data: any;
msgVal: string = '';
value: any = '';
rushi: FirebaseListObservable<any[]>;
items: Observable<any[]>;
item1s: Observable<any[]>;
employee: any[];
  constructor(public db: AngularFireDatabase, private route: ActivatedRoute) {

    // this.items = db.list('rushi').valueChanges();
    // this.item1s = db.list('shankar').valueChanges();

  //   var x = this.db.list('shankar');
  //   x.snapshotChanges().subscribe(item =>{
  //    item.forEach(element =>{
  //      var y = element.payload.toJSON();
  //      y["$key"] = element.key;
  //      this.employee.push(y);
  //    });

  //  });

  }
  login() {
    // var database = firebase.database();
    // var ref = database.ref('rushi');
    this.data = {

      name: this.msgVal,
      id: this.value
    }
    this.db.list(`shankar/`).push(this.data);
    // ref.push(data);
    this.item1s = this.db.list('shankar').valueChanges();

  }
  ngOnInit() {
    console.log(this.route);

  }

select(){

  this.msgVal ='';
}

}
