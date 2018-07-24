import { demo } from './../demo/demo.component';
import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService,UserService]
})
export class CountryComponent implements OnInit {
  
  public countryObj: any;
  public countryObjs: any;
  public countryName: string;
  public ddlname: any;
  public userInformation: any;
  public userName: any;
  public id: any;
  public pass: any;
  title:any;
  constructor(private countryService: CountryService, private userService: UserService) {
   }
  // public getCountryInfo(){
  //   this.countryService.getCountryDetail().subscribe(res =>this.countryObj = res.json())
  // }
  public getCountry(){
    this.countryService.getCountry( this.countryName ).subscribe(res =>this.countryObj = res.json())
  }

  ngOnInit() {
    this.countryService.getCountryDetail().subscribe(res =>this.countryObj = res.json());
    this.countryService.getCountryDetail().subscribe(res =>this.countryObjs = res.json());
  }

  public addUser(){
    let data= {
      uname: this.userName,
      password: this.pass
    }
    this.userService.saveUserData(data).subscribe(res =>{
      this.userInformation = res;
      console.log(res);
    });
  }
  public getUser(){
    
    this.userService.getUserData().subscribe(res =>{
     this.userInformation = res;
      console.log(res);
  });
  }

  public putUser(){
    let data = {
      uname: this.userName,
      password: this.pass
    }
    this.userService.putUserData(this.id,data).subscribe(res =>{
     this.userInformation = res;
      console.log(res);
  });
  }
  public deleteUser(){
    this.userService.deleteUserData(this.id).subscribe(res =>{
     this.userInformation = res;
      console.log(res);
  });
  }

}
