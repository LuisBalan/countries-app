import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebouce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();

  constructor() { }

  term: string = "";

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(400))
    .subscribe(value => {
      console.log('debouncer', value);
    });
  };

  search() {
    this.onEnter.emit(this.term);
  };

  pressedKey(event: any){
    const value = event.target.value;
    console.log(this.term);
    this.debouncer.next(this.term);
  };
  

}
