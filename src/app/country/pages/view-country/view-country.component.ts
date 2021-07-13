import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  country!: Country ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    console.log(`INIT`)
    // Get variables from url
    // Two subscribe methods
    // this.activatedRoute.params
    // .subscribe( ({id}) => {
    //   console.log(`params`, id)
    //   this.countryService.getCountryAlpha( id )
    //   .subscribe(country => {
    //     console.log(`country`, country);
    //   })
    // })

    // Using switchMap
    this.activatedRoute.params
    .pipe( 
      switchMap(({id}) => this.countryService.getCountryAlpha(id)),
      tap(console.log)
    )
    .subscribe(resp => {
      console.log(`resp`, resp);
      this.country = resp;
    })
  }

}
