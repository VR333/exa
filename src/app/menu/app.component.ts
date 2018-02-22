import { Component } from '@angular/core';
import { NavigationMenuService } from './../services/NavigationMenuService';

@Component({
  selector: 'exa-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuComponent {
    constructor(private navigationMenu: NavigationMenuService) {}
}
