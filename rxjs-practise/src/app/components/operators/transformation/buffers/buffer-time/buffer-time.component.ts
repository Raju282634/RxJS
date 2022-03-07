import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.css']
})
export class BufferTimeComponent implements OnInit {

  bufferData: number[] = [];
  constructor() { }

  ngOnInit(): void {
    const newObjs = interval(1000)
    .pipe(bufferTime(2000, 3000))
    .subscribe((data) => {
      console.log(data);
      this.bufferData.push(...data); } );
  }

}
