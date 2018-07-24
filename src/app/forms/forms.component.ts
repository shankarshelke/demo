import { Component, OnInit } from '@angular/core';
import { jsonEval } from '@firebase/util';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
title = "Welcome To Studant Registration";
  public name = "SHANKAR Shelke";
  public today = new Date();
  public amount=5000;
  public number = 5;
  public data = {
    name: "shankar shelke",
    city: "yeola",
  }
  constructor() { }

  ngOnInit() {
  }

  public saveStudantInfo(student: any){
    console.log('student: '+student.value.name);
  }

}
