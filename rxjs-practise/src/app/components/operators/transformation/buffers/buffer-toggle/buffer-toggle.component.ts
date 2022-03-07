import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferToggle, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html',
  styleUrls: ['./buffer-toggle.component.css']
})
export class BufferToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const opening = interval(6000).pipe(tap(() => console.log('Opening')));
    const closing = () => interval(3000).pipe(tap(() => console.log('Closing')));

    interval(1000)
      .pipe(tap((data) => console.log(data)),
            bufferToggle(opening, closing),
            take(3))
      .subscribe((data) => console.log(data));
  }

}
