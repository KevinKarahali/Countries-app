import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: []
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>()

  debouncer: Subject<string> = new Subject<string>();

  term: string = '';
  @Input()
  placeholder: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      })
  }

  search() {
    this.onEnter.emit(this.term);
  }


  keyPress() {
    this.debouncer.next(this.term);
  }
}
