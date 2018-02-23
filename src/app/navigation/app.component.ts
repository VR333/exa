import { Component } from '@angular/core';
import { NavigationButtonClick } from './../services/NavigationButtonClick';
import { MenuButtonClick } from './../services/MenuButtonClick';

@Component({
  selector: 'exa-navigation',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class NavigationComponent {
    path = this.menuButtonClick.path;

    constructor(
        private navigationButtonClick: NavigationButtonClick,
        private menuButtonClick: MenuButtonClick
    ) {}
}
