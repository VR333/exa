import { Injectable} from '@angular/core';

@Injectable()
export class NavigationButtonClick {
	shouldMoveMenu:boolean = false;
	shouldMoveMainContent:boolean = false;

    moveLeft() {
        this.shouldMoveMenu = !this.shouldMoveMenu;
		this.shouldMoveMainContent = !this.shouldMoveMainContent;
    }
}
