import { SendmsgService } from './services/sendmsg.service';
import { demo } from './demo/demo.component';
import { EmployeeReactiveForm } from './forms/employeereactive.form';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ListComponent } from './list/list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpModule } from '@angular/http';
import { firebase } from '@firebase/app';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { UploadFileService } from './upload-file.service';
import { TranslateHttpLoader, } from '@ngx-translate/http-loader';
import { CubePipe } from './pipe/my-cube-pipe';
import { FileSelectDirective } from 'ng2-file-upload';
import { Ng4FilesModule } from 'angular4-files-upload/src/app/ng4-files';
import { FileUploaderModule } from "ng4-file-upload/file-uploader.module";
import { CountryComponent } from './country/country.component';
import { CountryService } from './country.service';
import { FormsComponent } from './forms/forms.component';
import { JavaComponent } from './routing/java/java.component';
import { DotnetComponent } from './routing/dotnet/dotnet.component';
import { HomeComponent } from './routing/home/home.component';
import { RouteAuthentication } from './routing/routing.authentication';
import { PipedemoComponent } from './pipe/pipedemo/pipedemo.component';
import { GreetingPipe } from './pipe/greeting.pipe';
import { NgModule } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ParentComponent } from './parent/parent.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "/public/lang-files/", "-lang.json");
}

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'hero', component: HeroDetailComponent },
  { path: 'Uploadfile', component: FileuploadComponent },
  { path: 'Country', component: CountryComponent },
  { path: 'Studant', component: FormsComponent },
  { path: 'Employee', component: EmployeeReactiveForm },
  { path: 'Pipe', component: PipedemoComponent },
  { path: 'demo', component: demo },
  { path: 'parent', component: ParentComponent },
  {
    path: 'Routing', component: HomeComponent,canActivateChild:[RouteAuthentication],
    children: [
      { path: 'java', component: JavaComponent },
      { path: 'DotNet', component: DotnetComponent },]
  },

]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeroDetailComponent,
    FileuploadComponent,
    FileSelectDirective,
    CountryComponent,
    FormsComponent,
    CubePipe,
    EmployeeReactiveForm,
    JavaComponent,
    DotnetComponent,
    HomeComponent,
    PipedemoComponent,
    GreetingPipe,
    demo,
    ViewchildComponent,
    ParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth 
  ],
  providers: [SendmsgService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


