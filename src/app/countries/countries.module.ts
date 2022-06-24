import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForCapitalComponent} from './pages/for-capital/for-capital.component';
import {ForCountriesComponent} from './pages/for-countries/for-countries.component';
import {ForRegionComponent} from './pages/for-region/for-region.component';
import {SeeCountryComponent} from './pages/see-country/see-country.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountriesComponent,
    ForRegionComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ForCapitalComponent,
    ForCountriesComponent,
    ForRegionComponent,
    SeeCountryComponent,

  ]
})
export class CountriesModule {
}
