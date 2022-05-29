import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * This components represents a toggle switch on the UI.
 * It accepts as input labels of its two states.
 */
@Component({
  selector: 'ns-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  toggleCtrl:FormControl = new FormControl(false);
  /**
   * label of first state - such as on
   */
  @Input() label1 = '';
  /**
   * label of second state such as off
   */
  @Input() label2 = '';
  @Input() id = 'toggle';
  @Output() toggleEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
