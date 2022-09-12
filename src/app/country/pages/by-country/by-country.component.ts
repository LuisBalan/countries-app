import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  term: string = "";
  thereIsError: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) {}

  search(term: string){
    this.term = term;
    this.thereIsError = false
    this.countryService.search(this.term)
    .subscribe((res) => {
      // console.log(res);
      this.countries = [...res];
      console.log(this.countries)
    }, (err: any) => {
      this.thereIsError = true;
      console.log(this.countries)
    });
  };

}
