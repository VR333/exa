import { Component } from '@angular/core';
import { NavigationButtonClick } from './../services/NavigationButtonClick';

@Component({
  selector: 'exa-main-content',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MainContentComponent {
    constructor(private navigationButtonClick: NavigationButtonClick) {}
}
