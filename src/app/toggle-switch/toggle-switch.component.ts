import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ns-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  toggleCtrl:FormControl = new FormControl(false);
  @Output() toggleEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // directionChanged(reversed: boolean) {
  //   this.toggleEvent.emit(this.toggleCtrl.value);
  // }
}
