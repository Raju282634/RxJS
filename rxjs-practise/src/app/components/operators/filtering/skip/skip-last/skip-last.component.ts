import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { skipLast, take } from 'rxjs/operators';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.css']
})
export class SkipLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    interval(1000)
      .pipe(take(10), skipLast(3))
      .subscribe((data) => console.log(data),
          (error) => console.log(error),
          () => console.log('Completed'));
  }
}
