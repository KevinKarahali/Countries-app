import {Component} from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styles: []
})
export class ForCapitalComponent {

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  placeholder: string = "Search by capital";

  constructor(private countryService: CountryService) {
  }

  search($event: string) {
    this.isError = false;
    this.term = $event;
    this.countryService.searchCapital(this.term).subscribe({
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

}
