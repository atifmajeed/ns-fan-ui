import { Component } from '@angular/core';

const MAX_SPEED = 4;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ns_fan_ui';
  reverse = false;
  speed:number = 0;

  toggleDirection() {
    this.reverse = !this.reverse;
  }

  setSpeed() {
    this.speed = (this.speed == MAX_SPEED ? 0 : ++this.speed);
  }
}
