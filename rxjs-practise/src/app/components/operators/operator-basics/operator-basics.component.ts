import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-operator-basics',
  templateUrl: './operator-basics.component.html',
  styleUrls: ['./operator-basics.component.css']
})
export class OperatorBasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const newObjs = interval(1000);
    // // newObjs.subscribe( (data) => { if (data % 2 === 0) { console.log(data); } } );

    // newObjs.pipe(filter((data) => data % 2 === 0 ),
    //              map((data) => 'Even number is ' + data))
    //        .subscribe((data) => console.log(data));

  }


}
