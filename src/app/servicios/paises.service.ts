import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  constructor(private http : HttpClient) {
  }

  traerEuropa(){
    return this.http.get('https://restcountries.com/v3.1/region/europe');
  }

  traerAfrica(){
    return this.http.get('https://restcountries.com/v3.1/region/africa');
  }



}
