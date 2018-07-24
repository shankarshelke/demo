import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  empData = [
    {empName:"Shankar",empCity:"Yeola",empSalary:10000},
    {empName:"Govinda",empCity:"Kopargaon",empSalary:20000},
    {empName:"Shidhyesh",empCity:"Pune",empSalary:20000}
  ]
  selectedRecored:any = {
    selectName : "",
    selectCity : "",
    selectSalary : "",
  }
  displayRecord(selectedRecord:any){
      this.selectedRecored = selectedRecord;
    
  }

  constructor() { }

  ngOnInit() {
  }

}
