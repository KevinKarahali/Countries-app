import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2/'

  constructor(private http: HttpClient) {
  }

  searchCountry(countryName: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + 'name/' + countryName)
  }

  searchCapital(capitalName: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + 'capital/' + capitalName)
  }

  //search by
}
