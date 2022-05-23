import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  @Input() lightOn!: string;
  @Input() lightOff!: string;
  @Output() lightSwitch = new EventEmitter()

  onSwitch() {
    this.lightSwitch.emit()
  }

}
