import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  constructor(private countryService: CountryService) { }

  term: string = '';
  countries: Country[] = [];
  isError: boolean = false;

  search( term: string ) {
    console.log(`term`, this.term);
    this.isError = false;
    this.term = term;
    this.countryService.searchCapital(this.term)
    .subscribe(countries => {
      console.log(`countries`, countries);
      this.countries = countries;
      
    } , (err) => {
      console.info(`err`, err)
      this.isError = true;
      this.countries = [];
    }
    )
  }

  suggestion( term: string) {
    this.isError = false;
    // this.term = 
  }

  
}
