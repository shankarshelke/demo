import { ViewchildComponent } from './../viewchild/viewchild.component';
import { Component,Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList} from '@angular/core';
@Component(
    {
        selector : 'root-demo',
        templateUrl : './demo.component.html',
    }
)

export class demo 
{
    @Input('name') empName:string;
    @Input('city') empCity:string;
    @Input('salary') empSalary:string;

    @Output() selectedRecord:EventEmitter<any> = new EventEmitter;

    // @ViewChild(ViewchildComponent) c:ViewchildComponent;
    @ViewChildren(ViewchildComponent) c: QueryList<ViewchildComponent>;

    private carray : Array<ViewchildComponent>;
    a;
    constructor(){
    }

    ngAfterViewInit(){
        this.carray = this.c.toArray();
    }

    show(){
        this.carray[this.a].name = "hello shankar how are you";
    }

    passdata(){
        let MyData = {
            selectName : this.empName,
            selectCity : this.empCity,
            selectSalary : this.empSalary,
        }
        this.selectedRecord.emit(MyData)
    }


}