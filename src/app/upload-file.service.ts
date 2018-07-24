import {Injectable} from '@angular/core';
import {AngularFireDatabase , } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated/firebase_list_observable';
import * as firebase from 'firebase';
import { HttpModule, Http , Response} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
// import {FileUpload} from './fileupload';
import { Upload } from './fileupload';
@Injectable()
export class UploadFileService {
 
    constructor(private db: AngularFireDatabase,private _http: Http) { }
    private basePath:string = '/uploads';
    uploads: FirebaseListObservable<Upload[]>;
    pushUpload(upload: Upload) {
      let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          // upload in progress
          upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100
        },
        (error) => {
          // upload failed
          console.log(error)
        },
        () => {
          // upload success
          upload.url = uploadTask.snapshot.downloadURL
          upload.name = upload.file.name
          this.saveFileData(upload)
        }
      );
    }
    // Writes the file details to the realtime db
    private saveFileData(upload: Upload) {
      this.db.list(`${this.basePath}/`).push(upload);
    }

    public uploadImage(formdata: any,data: any){
      let _url: string = 'http://localhost/angular4/uploadfile.php';
      // let _url: string = 'http://localhost:4200/uploadfile.php';
      return this._http.post(_url, formdata,data)
      .catch(this._errorHandler);
    }

    private _errorHandler(error: Response){
      console.error('Error Occured:' +error);
      return Observable.throw(error || 'Some Error on server Occured');
    }
    public getFilesList(){
      let _url: string = 'http://localhost/angular4/getFilesFromDirectory.php';
      return this._http.get(_url)
      .catch(this._errorHandler);
    }
}