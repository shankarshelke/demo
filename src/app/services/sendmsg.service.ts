import { HttpHeaders } from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { log } from 'util';

@Injectable()

export class SendmsgService{

    constructor(private _http:Http) { }

    public sendOtp(contact:number,msg:string){
        const headers = new HttpHeaders().set('Content-Type', []);
        
        let url="https://www.logonutility.in/app/smsapi/index.php?key=45A0151CA760D7&campaign=11406&routeid=20&type=text&contacts="+contact+"&senderid=ATJOIN&msg="+msg;
        // this._http.get(url).subscribe(res=>{
        //     console.log(res);
        // })
        return this._http.request(url);
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