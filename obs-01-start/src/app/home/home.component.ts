import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSub: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSub = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObs = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 2 ) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('count is greater than 3'))
        }
        count++;
      }, 1000);
    });

    this.firstObsSub = customIntervalObs.pipe(filter((data:number) => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error.message);
      alert(error);
    }, () => {
      console.log('completed')
    });
  }

  ngOnDestroy(): void {
    this.firstObsSub.unsubscribe();
  }
}
