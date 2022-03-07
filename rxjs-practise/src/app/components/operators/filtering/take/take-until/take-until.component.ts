import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit {

  buttonEvent: Observable<Event>;

  constructor() { }

  ngOnInit(): void {
    this.buttonEvent = fromEvent(document.getElementById('takeUntil'), 'click');
  }

  startInterval(){
    interval(1000)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe((data) => console.log(data),
                 (error) => console.log(error),
                 () => console.log('completed'));
  }
}
