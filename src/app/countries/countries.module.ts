import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountriesComponent } from './pages/for-countries/for-countries.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';



@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountriesComponent,
    ForRegionComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForCapitalComponent,
    ForCountriesComponent,
    ForRegionComponent,
    SeeCountryComponent
  ]
})
export class CountriesModule { }
