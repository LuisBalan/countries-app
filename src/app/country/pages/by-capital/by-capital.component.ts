import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries-interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})

export class ByCapitalComponent {

  term: string = "";
  thereIsError: boolean = false;
  capitals: Country[] = []

  constructor( private capitalSerivce: CapitalService) { }

  search(term: string){
    this.term = term;
    this.thereIsError = false;
    this.capitalSerivce.search(this.term)
    .subscribe((res) => {
      this.capitals = [...res];
    }, (err: any) => {
      this.thereIsError = true;
      console.log(this.capitals)
    });
  };

  sugerences(term: string){
    this.thereIsError = false;
  };

};
