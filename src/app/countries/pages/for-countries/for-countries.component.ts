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

  search() {
    this.isError = false;
    this.countryService.searchCountry(this.term).subscribe({
        next: (data) => {
          console.log(data);
          this.countries = data;
        },
        error: (err) => {
          this.isError = true;
          this.countries = [];
        }
      }
    )
  }
}

