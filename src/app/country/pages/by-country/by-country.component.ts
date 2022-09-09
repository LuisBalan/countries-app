import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  term: string = "";
  thereIsError: boolean = false;

  constructor( private countryService: CountryService ) {}

  search(){
    this.thereIsError = false
    this.countryService.search(this.term)
    .subscribe((res) => {
      console.log(res);
    }, (err: any) => {
      this.thereIsError = true;
    });
  };

}
