import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit, AfterViewInit {
  intervalData: number[] = [];

  showData$: Observable<Event>;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.showData$ = fromEvent(document.getElementById('getIntervalButton'), 'click');
  }
  startInterval(){
    interval(1000)
      .pipe(buffer(this.showData$))
      .subscribe((data) => this.intervalData.push(...data));
  }

}
