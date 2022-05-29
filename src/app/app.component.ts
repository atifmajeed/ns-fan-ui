import { Component, OnInit } from '@angular/core';
import { CeilingFanService } from './api/ceiling-fan.service';
import { FanState } from './fan-state';

const MAX_SPEED = 3;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fanState:FanState = new FanState();

  constructor(private fanService:CeilingFanService) {

  }

  ngOnInit(): void {
    this.fanService.getFanState().subscribe(data => this.fanState = data);
  }

  toggleDirection() {
    this.fanState.reverse = !this.fanState.reverse;
    this.fanService.updateFanState(this.fanState).subscribe(data => { console.log('fanState ', this.fanState);});
  }

  setSpeed() {
    this.fanState.speed = (this.fanState.speed == MAX_SPEED ? 0 : ++this.fanState.speed);
    this.fanService.updateFanState(this.fanState).subscribe(data => { console.log('fanState ', this.fanState);});
  }
}
