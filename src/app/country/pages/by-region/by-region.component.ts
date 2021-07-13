import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
    }
    
    `
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  activateRegion( region: string) {
    if (region === this.activeRegion) return;
    this.activeRegion = region;
    console.log(`this.activeRegion`, this.activeRegion)
    this.countries = [];

    this.isError = false;
    this.countryService.searchRegion(this.activeRegion)
    .subscribe(countries => {
      console.log(`countries`, countries);
      this.countries = countries;
      
    } , (err) => {
      console.info(`err`, err)
      this.isError = true;
      this.countries = [];
    });
  }

  getClassCss( region: string): string {
    return region === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  constructor(private countryService: CountryService) { }


}
