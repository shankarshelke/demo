import {AngularFireDatabase , } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated/firebase_list_observable';
import * as firebase from 'firebase';
// import {FileUpload} from './fileupload';
import { Upload } from './fileupload';

export class UploadFileService {
 
    // constructor(private db: AngularFireDatabase) { }
    // private basePath:string = '/uploads';
    // uploads: FirebaseListObservable<Upload[]>;
    // pushUpload(upload: Upload) {
    //   let storageRef = firebase.storage().ref();
    //   let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //     (snapshot) =>  {
    //       // upload in progress
    //       upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100
    //     },
    //     (error) => {
    //       // upload failed
    //       console.log(error)
    //     },
    //     () => {
    //       // upload success
    //       upload.url = uploadTask.snapshot.downloadURL
    //       upload.name = upload.file.name
    //       this.saveFileData(upload)
    //     }
    //   );
    // }
    // // Writes the file details to the realtime db
    // private saveFileData(upload: Upload) {
    //   this.db.list(`${this.basePath}/`).push(upload);
    // }
}