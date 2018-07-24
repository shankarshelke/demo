import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
    selector:'root-emp',
    templateUrl:'./employeereactive.form.html'
})

export class EmployeeReactiveForm{

    public employeeModel: FormGroup
    constructor(){
         this.employeeModel = new FormGroup({
            name: new FormControl("",[Validators.required]),
            email:new FormControl("",[Validators.required])
        });

        
    }
    public submitEmployeeInfo(){
            console.log("Emp Data " + this.employeeModel.value.name+ " "+this.employeeModel.value.email);
    }
}