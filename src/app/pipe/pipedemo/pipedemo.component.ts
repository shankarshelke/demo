import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  title = "pipe demo";
  todaysdate = new Date;
  amount = 1000;
  number = 300;
  name = "Shankar";

  constructor() { }

  ngOnInit() {
  }

}
