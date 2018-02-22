import { Component } from '@angular/core';

@Component({
  selector: 'exa-header-bookmark',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class HeaderBookmarkComponent {
    companies = [
        {
            id: 0,
            name: "Alabama"
        },
        {
            id: 1,
            name: "Alaska"
        },
        {
            id: 2,
            name: "Arkansas"
        },
        {
            id: 3,
            name: "California"
        },
        {
            id: 4,
            name: "Colorado"
        },
        {
            id: 5,
            name: "Delaware"
        },
        {
            id: 6,
            name: "Florida"
        }
    ];

}
