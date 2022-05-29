import { Component, OnInit } from '@angular/core';
import { CeilingFanService } from './api/ceiling-fan.service';
import { FanState } from './fan-state';

const MAX_FAN_SPEED = 3;
/**
 * This main components represents front end of a ceiling fan simulation.
 * It show fan state and control panel to change the speed and direction of the fan.
 * It interacts with a BE service to get the initial state of the fan.
 * It sends state changes to the BE service to save.
 * The fan is in the running state unless its speed is set to zero
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //instance variable to capture the state of a fan - direction and speed
  fanState:FanState = new FanState();

  constructor(private fanService:CeilingFanService) {
  }

  ngOnInit(): void {
    this.fanService.getFanState().subscribe(data => this.fanState = data);
  }

  /**
   * Changes direction of the fan and saves it by sending to the BE service
   */
  toggleDirection() {
    this.fanState.reverse = !this.fanState.reverse;
    this.fanService.updateFanState(this.fanState).subscribe(data => data);
  }

  /**
   * Changes speed of the fan and saves it by sending to the BE service
   */
  setSpeed() {
    this.fanState.speed = (this.fanState.speed == MAX_FAN_SPEED ? 0 : ++this.fanState.speed);
    this.fanService.updateFanState(this.fanState).subscribe(data => data);
  }
}
