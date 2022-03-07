import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.css']
})
export class TakeLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(100)
      .pipe(take(5), takeLast(3))
      .subscribe((data) => console.log(data));
  }
}
