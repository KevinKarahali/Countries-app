import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2/'

  constructor(private http: HttpClient) {
  }

  searchCountry(countryName: string): Observable<any> {
    return this.http.get(this.apiUrl + 'name/' + countryName)
  }
}
