import { Injectable} from '@angular/core';

@Injectable()
export class NavigationMenuService {
	toggle:boolean = false;

    moveMenu() {
        this.toggle = !this.toggle;
		console.log(this.toggle);
    }
}
