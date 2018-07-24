import { Component, OnInit, ElementRef} from '@angular/core';
import * as _ from "lodash";
import {AngularFireDatabase , } from 'angularfire2/database';
import {UploadFileService} from '../upload-file.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database-deprecated/firebase_list_observable';
import * as firebase from 'firebase';
// import {UploadFileService} from '../upload-file.service';
import {Upload, FileUpload} from '../fileupload';
import { puts } from 'util';
import { Element } from '@angular/compiler';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css'],
  providers: [UploadFileService]
})
export class FileuploadComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Upload;
  public fileData: any;
  item: Observable<any[]>;
  public tableData: any;
  public tableDatas: any;
  constructor(private db: AngularFireDatabase,private fileuploader: UploadFileService,private elem: ElementRef ) {
    this.item = db.list('img').valueChanges();
   }
  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }
  ngOnInit() {
    this.fileuploader.getFilesList().subscribe(res=>this.displayTableData(res));
  }

  private basePath:string = '/img/';
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
  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.pushUpload(this.currentUpload)
  }
  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.pushUpload(this.currentUpload)}
    )
  }

  uploadImage(){
    this.elem.nativeElement.querySelector('#spinner').style.visibility='visible';
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('selectFile',file,file.name);
    let data = "1002";
    console.log(file.name)
    this.fileuploader.uploadImage(formData,data).subscribe(res => this.dataLoaded(res));
    this.tableDatas = {
      filename: file.name,
      fillpath: `http://localhost/angular4/uploads/${file.name}`
    }
    // this.fileuploader.getFilesList().subscribe(res=>this.displayTableData(res));
  }

  private dataLoaded(data: any){
    this.elem.nativeElement.querySelector('#spinner').style.visibility='hidden';
    
  }

  // private refreshList(): void{
  //   this.fileuploader.getFilesList().subscribe(res=>this.displayTableData(res));
  // }

  private displayTableData(data: any){
    this.tableData = data.json();
  }
}
