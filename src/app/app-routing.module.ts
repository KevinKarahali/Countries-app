import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ForCountriesComponent} from "./countries/pages/for-countries/for-countries.component";
import {ForRegionComponent} from "./countries/pages/for-region/for-region.component";
import {ForCapitalComponent} from "./countries/pages/for-capital/for-capital.component";
import {SeeCountryComponent} from "./countries/pages/see-country/see-country.component";

const routes: Routes = [
  {
    path: '', component: ForCountriesComponent, pathMatch: "full",
  },
  {
    path: 'region', component: ForRegionComponent
  },
  {
    path: 'capital', component: ForCapitalComponent
  },
  {
    path: 'country/:id', component: SeeCountryComponent
  },
  {
    path: "**", redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
