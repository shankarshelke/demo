import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated/firebase_list_observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebase } from '@firebase/app';
import { SendmsgService } from './services/sendmsg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  msg:string;contact:number;
  action: string = '';
  constructor(private msrv: SendmsgService){}
  name: any;
  msgVal: string = '';

  sendmsg(){
    console.log("it's work")
    this.msrv.sendOtp(this.contact,this.msg);
  }
  
}


