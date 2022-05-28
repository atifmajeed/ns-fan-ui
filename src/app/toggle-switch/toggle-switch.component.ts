import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ns-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  toggleCtrl:FormControl = new FormControl(false);
  @Input() label1 = '';
  @Input() label2 = '';
  @Input() id = 'toggle';
  @Output() toggleEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
