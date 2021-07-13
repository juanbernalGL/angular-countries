import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  term: string = "";

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  search () {
    this.onEnter.emit( this.term );
  }
  
  // keyPress (event: any) {
  //   const value = event.target.value;
  //   console.log(`value`, value);
  // }

  keyPress () {
    this.debouncer.next( this.term );
  }

  constructor() { }

  

}
