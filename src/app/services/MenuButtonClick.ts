import { Injectable} from '@angular/core';

@Injectable()
export class MenuButtonClick {
	path= 'Speed';

	changeNavigationLine(navigationString) {
		this.path = navigationString;
	}
}
