import {Component} from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: []
})
export class ForRegionComponent {

  regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {
  }

  getClassCss(region: string) {
    return this.regionActive === region ? 'active' : '';
  }

  activateRegion(region: string) {
    if (region === this.regionActive) {
      return
    }
    this.regionActive = region;
    this.countries = [];
  }

  searchRegion(region: string) {
    this.countryService.searchRegion(region).subscribe(
      (countries: Country[]) => {
        this.countries = countries;
      }
    );
  }


}
