import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries-interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.com/v2/'

  constructor(private http: HttpClient) { }

  search(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${term}`;
    // returns the response
    return this.http.get<Country[]>(url);
  };

};
