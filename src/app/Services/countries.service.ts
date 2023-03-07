import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService
{
  constructor(private httpclient:HttpClient)
  {
  }

  getCountries(): Observable<Country[]>
  {
    return this.httpclient.get<Country[]>
    ("/api/countries",{responseType:"json"});    
  }
}