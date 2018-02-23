import { Component } from '@angular/core';
import { NavigationButtonClick } from './../services/NavigationButtonClick';

@Component({
  selector: 'exa-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuComponent {
    constructor(private navigationButtonClick: NavigationButtonClick) {}
}
