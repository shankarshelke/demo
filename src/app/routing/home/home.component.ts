import { JavaComponent } from './../java/java.component';
import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { DotnetComponent } from '../dotnet/dotnet.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
