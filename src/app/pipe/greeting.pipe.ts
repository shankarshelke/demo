import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'greeting'
})

export class GreetingPipe implements PipeTransform{

    transform(value:string,time){
        if(time > '12:00' ){
            return "Hello "+value+" Good Morning";
        }
    }
}