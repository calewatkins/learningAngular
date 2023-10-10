import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToactiveCounter = 0;

  incrementActiveToInactive() {
  this.activeToInactiveCounter++;
  console.log("Active to Inactive count: " + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToactiveCounter++;
    console.log("Inactive to Active count: " + this.inactiveToactiveCounter);
  }
  constructor() { }
}
