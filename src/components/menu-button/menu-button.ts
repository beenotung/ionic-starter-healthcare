import {Component, Input} from '@angular/core';

@Component({
  selector: 'menu-button',
  templateUrl: 'menu-button.html'
})
export class MenuButtonComponent {

  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  color = 'primary';

  constructor() {
    console.log('Hello MenuButtonComponent Component');
  }

}
