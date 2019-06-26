import { Component } from '@angular/core';
import {BehaviorSubject, combineLatest, merge, Observable} from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstObservable = new BehaviorSubject<number>(0);
  secondObservable = new BehaviorSubject<number>(0);
  thirdObservable = new BehaviorSubject<number>(0);

  sumObservable = new BehaviorSubject<number>(0);

  constructor() {
    combineLatest(this.firstObservable, this.secondObservable, this.thirdObservable).subscribe(values => {
      this.sumObservable.next(values[0] + values[1] + values[2]);
    });
  }

  incrementFirstObservable() {
    this.firstObservable.next(this.firstObservable.value + 1);
  }

  incrementSecondObservable() {
    this.secondObservable.next(this.secondObservable.value + 1);
  }

  incrementThirdObservable() {
    this.thirdObservable.next(this.thirdObservable.value + 1);
  }
}
