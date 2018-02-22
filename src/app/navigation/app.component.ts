import { Component } from '@angular/core';
import { NavigationMenuService } from './../services/NavigationMenuService';

@Component({
  selector: 'exa-navigation',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class NavigationComponent {
    path = 'Make some dynamic string here!';

    constructor(private help: NavigationMenuService) {}
}
