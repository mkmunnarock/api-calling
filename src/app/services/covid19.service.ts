import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

API = 'https://coronavirus-19-api.herokuapp.com/countries';
  constructor(
    private http:HttpClient
  ) { }

  public Covid19Report()
  {
    return this.http.get(this.API);
  }
}
