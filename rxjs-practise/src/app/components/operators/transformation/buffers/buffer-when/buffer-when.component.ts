import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.css']
})
export class BufferWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    interval(1000)
      .pipe(bufferWhen(() => interval(2000)))
      .subscribe((data) => console.log(data));
  }

}
