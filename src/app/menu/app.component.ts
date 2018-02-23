import { Component } from '@angular/core';
import { NavigationButtonClick } from './../services/NavigationButtonClick';

@Component({
  selector: 'exa-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuComponent {
    constructor(
        private navigationButtonClick: NavigationButtonClick
    ) {}

    icons = [
        {
            id: 0,
            name: "Speed",
            class: "fas fa-tachometer-alt",
            link: "/speed"
        },
        {
            id: 1,
            name: "Search",
            class: "fab fa-sistrix",
            link: "/search"
        },
        {
            id: 2,
            name: "Tabs",
            class: "fas fa-list-ul",
            link: "/tabs"
        },
        {
            id: 3,
            name: "Briefcase",
            class: "fas fa-briefcase",
            link: "/briefcase"
        },
        {
            id: 4,
            name: "Database",
            class: "fas fa-database",
            link: "/database"
        },
        {
            id: 5,
            name: "Upload",
            class: "fas fa-upload",
            link: "/upload"
        }
    ];
}
