import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  name:string = "Hello ayushi how are you"
  a;b=10;c=20;

  constructor() { }

  ngOnInit() {
  }

  add(){
    return this.b +this.c;
  }

}
