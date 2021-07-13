import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent {

  constructor( private countryService: CountryService) { }

  term: string = '';
  countries: Country[] = [];
  suggestCountries: Country[] = [];
  isError: boolean = false;
  isShowSuggest: boolean = false;
  
  search( term: string ) {
    this.isError = false;
    this.term = term;
    console.log(`term-->`, this.term);
    this.countryService.searchCountry(this.term)
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
    console.log(`term----->`, term);
    this.isShowSuggest = true;
    this.isError = false;
    this.term = term;
    this.countryService.searchCountry( term )
    .subscribe( 
      countries => this.suggestCountries = countries.splice(0,3),
      (err) => this.suggestCountries = []  
    );
  }

  searchSuggestion( term: string) {
    console.log(`term Suggest`, term);
    this.search(term);
    this.isShowSuggest = false;
  }

}
