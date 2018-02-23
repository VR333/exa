import { Component } from '@angular/core';
import { NavigationButtonClick } from './../services/NavigationButtonClick';
import { MenuButtonClick } from './../services/MenuButtonClick';

@Component({
  selector: 'exa-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class MenuComponent {
    constructor(
        private navigationButtonClick: NavigationButtonClick,
        private menuButtonClick: MenuButtonClick
    ) {}

    handleClick(icon) {
        this.icons.map( a => a.active = false);
        icon.active = true;

        this.menuButtonClick.changeNavigationLine(icon.name);
    }

    icons = [
        {
            id: 0,
            name: "Speed",
            class: "fas fa-tachometer-alt",
            active: true,
            link: "/speed"
        },
        {
            id: 1,
            name: "Search",
            class: "fab fa-sistrix",
            active: false,
            link: "/search"
        },
        {
            id: 2,
            name: "Tabs",
            class: "fas fa-list-ul",
            active: false,
            link: "/tabs"
        },
        {
            id: 3,
            name: "Briefcase",
            class: "fas fa-briefcase",
            active: false,
            link: "/briefcase"
        },
        {
            id: 4,
            name: "Database",
            class: "fas fa-database",
            active: false,
            link: "/database"
        },
        {
            id: 5,
            name: "Upload",
            class: "fas fa-upload",
            active: false,
            link: "/upload"
        }
    ];
}
