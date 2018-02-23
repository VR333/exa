import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { NavigationButtonClick } from './../services/NavigationButtonClick';

@Component({
  selector: 'exa-navigation',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class NavigationComponent {
    path: string;

    constructor(
        private navigationButtonClick: NavigationButtonClick,
        private location: Location,
        private router: Router
    ) {
        router.events.forEach( () => {
            this.path = location.path().split('/').join('').replace(/(^|\s)\S/g, l => l.toUpperCase());
        });
    }
}
