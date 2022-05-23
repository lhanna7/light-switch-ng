import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {

  @Input() lightOn!: string;
  @Input() lightOff!: string;
  @Input() altText!: string;
  @Input() isOn!: boolean;
}
