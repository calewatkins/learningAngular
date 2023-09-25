import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-3';

  showP = false;
  log = [];
  
  onToggleDisplay() {
    this.showP = !this.showP;
    this.log.push(this.log.length + 1);
  }
}
