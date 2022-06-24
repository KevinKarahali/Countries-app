import {Component} from '@angular/core';
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-for-countries',
  templateUrl: './for-countries.component.html',
  styles: []
})
export class ForCountriesComponent {
  term: string = '';
  isError: boolean = false;

  constructor(private countryService: CountryService) {
  }

  search() {
    this.isError = false;
    this.countryService.searchCountry(this.term).subscribe({
        next: (data) => console.log(data),
        error: (err) => this.isError = true
      }
    )
  }
}

