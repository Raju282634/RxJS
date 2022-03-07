import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    interval(1000)
      .pipe(skip(5), take(20))
      .subscribe((data) => console.log(data));
  }

}
