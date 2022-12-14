import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {

  @Input() countries: Country[] = [];
  @Input() thereIsError: boolean = false;


}
