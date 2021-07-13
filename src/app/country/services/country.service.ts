import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
   return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  } 

  constructor( private http: HttpClient) { }

  searchCountry( term: string ):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>( url, { params: this.httpParams} );
    // .pipe(
    //   catchError(err => of([]))
    // );
  }

  searchCapital( term: string ):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>( url, { params: this.httpParams} );
    // .pipe(
    //   catchError(err => of([]))
    // );
  }

  getCountryAlpha( id: string ):Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>( url );
    // .pipe(
    //   catchError(err => of([]))
    // );
  }

  searchRegion( region: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>( url, { params: this.httpParams} );
  }
}
