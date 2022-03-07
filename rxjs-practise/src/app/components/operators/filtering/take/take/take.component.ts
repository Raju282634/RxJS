import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
      .pipe(take(8))
      .subscribe((data) => console.log(data),
                 (error) => console.log(error),
                 () => console.log('Completed'));
  }

}
