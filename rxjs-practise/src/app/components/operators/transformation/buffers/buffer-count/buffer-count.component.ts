import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.css']
})
export class BufferCountComponent implements OnInit {

  bufferData: number[] = [];
  constructor() { }

  ngOnInit(): void {
    const newObjs = interval(1000)
    .pipe(bufferCount(5, 3))
    .subscribe((data) => {
      console.log(data);
      this.bufferData.push(...data);
    });
  }

}
