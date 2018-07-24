import { HttpHeaders } from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { log } from 'util';

@Injectable()

export class UserService{

    constructor(private _http:Http) { }

    public saveUserData(data: any){
        // const formData = new FormData();
        // formData.append('data',JSON.stringify(data));
        // console.log('name'+data.name)
        // let data1 = JSON.stringify(data);
        // const headers = new HttpHeaders().set('Content-Type', []);
        // let url="http://localhost/atopd1/jsonpages/registerHospital/"+data.contact+"/"+data.name+"/"+data.password;
        //let url="http://localhost/atopd1/jsonpages/getHospital/"+data.contact;
        //return this._http.post(url,data1).map((res:Response)=>res.json());
        
        // let url="http://localhost:33231/api/register";
        // return this._http.get(url).map((res:Response)=>res.json());

        let url="http://localhost:1783/api/register";
        return this._http.post(url,data).map((res:Response)=>res.json());

    }
    public getUserData(){
        const headers = new HttpHeaders().set('Content-Type', []);
        let url="http://localhost:1783/api/register";
        return this._http.get(url).map((res:Response)=>res.json());
    }
    public putUserData(id:any,data: any){
        let url="http://localhost:1783/api/register/"+id;
        return this._http.put(url,data);
    }
    public deleteUserData(id:any){
        let url="http://localhost:1783/api/register/"+id;
        return this._http.delete(url);
    }
}