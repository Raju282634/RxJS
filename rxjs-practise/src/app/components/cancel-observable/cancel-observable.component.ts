import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-cancel-observable',
  templateUrl: './cancel-observable.component.html',
  styleUrls: ['./cancel-observable.component.css']
})
export class CancelObservableComponent implements OnInit {

  timerSubscription: any;

  constructor() { }

  ngOnInit(): void {
      // const cancelObs = interval(1000);
      const cancelObs = new Observable(observer => {
        let i = 0;
        setInterval(() => { observer.next(i++); }, 1000);
      });

      this.timerSubscription = cancelObs.subscribe(
        (data) => {console.log( new Date().toLocaleTimeString() + ': ' + data); },
        (error) => {console.log(error); }
      );
  }
  cancelObserver(){
    console.log('Observer Cancelled');
    this.timerSubscription.unsubscribe();
  }

}
