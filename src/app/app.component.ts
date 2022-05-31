import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CeilingFanService } from './api/ceiling-fan.service';
import { FanState } from './fan-state';

const MAX_FAN_SPEED = 3;
/**
 * This main component represents front end of a ceiling fan simulation.
 * It show fan state and control panel to change the speed and direction of the fan.
 * It interacts with a BE service to get the initial state of the fan.
 * It sends state changes to the BE service to save.
 * The fan is in the running state unless its speed is set to zero
 * @author Atif Majeed
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //instance variable to capture the state of a fan - direction and speed
  fanState:FanState = new FanState();
  errorMessage = "";

  constructor(public fanService:CeilingFanService) {
  }

  ngOnInit(): void {
    this.fanService.getFanState().subscribe({next: data => this.fanState = data, error: err => this.handleError(err)});
  }

  /**
   * Changes direction of the fan and saves it by sending to the BE service
   */
  toggleDirection() {
    this.fanState.reverse = !this.fanState.reverse;
    this.fanService.updateFanState(this.fanState).subscribe({next: data => data, error: err => this.handleError(err)});
  }

  /**
   * Changes speed of the fan and saves it by sending to the BE service
   */
  setSpeed() {
    this.fanState.speed = (this.fanState.speed == MAX_FAN_SPEED ? 0 : ++this.fanState.speed);
    this.fanService.updateFanState(this.fanState).subscribe({next: data => data, error: err => this.handleError(err)});
  }

  /**
   * Handles service errors. Logs error message, resets fan state, and shows a message to the user
   * @param error http error
   * @returns an error message
   */
   private handleError(error: HttpErrorResponse) {
    this.errorMessage = "An error has occurred. Please try again later.";
    console.error(`BE returned error code ${error.status}, response body : `, error.error);
  }

  /**
   * Clears error message when user dismisses the error
   */
  reset() {
    this.errorMessage = "";
  }
}
