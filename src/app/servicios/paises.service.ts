import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  constructor(private http : HttpClient) {
  }

  traerTodos(){
    return this.http.get('https://restcountries.eu/rest/v2/regionalbloc/eu');
  }



}
