import {Component} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-for-countries',
  templateUrl: './for-countries.component.html',
  styles: []
})
export class ForCountriesComponent {
  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {
  }

  search($event: string) {
    this.isError = false;
    this.term = $event;
    this.countryService.searchCountry(this.term).subscribe({
        next: (data: Country[]) => {
          this.countries = data;
        },
        error: (err) => {
          console.log(err);
          this.isError = true;
          this.countries = [];
        }
      }
    )
  }

  suggestions(term: string) {
    this.isError = false;
  }
}

