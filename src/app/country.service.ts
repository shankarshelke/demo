import { Injectable } from '@angular/core';
import { HttpModule ,Http } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {
  constructor(private _http: Http) {
    
  }
  public getCountryDetail(){
      let _url: string = 'https://restcountries.eu/rest/v2/all';
      return this._http.get(_url);
  }
  public getCountry(countryName: string){
    let _url: string = 'https://restcountries.eu/rest/v2/name/'+countryName+'?fullText=True';
    return this._http.get(_url);
  }
}
