import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css']
})
export class TakeWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    interval(1000)
      .pipe(takeWhile((data) => data < 5))
      .subscribe((data) => console.log(data));
  }

}
