import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialer',
    templateUrl: './dialer.page.html',
    styleUrls: ['./dialer.page.scss'],
})
export class DialerPage implements OnInit {

    contacts = [
        {
            name: 'Tal',
            number: '0544424442',
            whatsapp: '0544424442',
            gender: 'male'
        },
        {
            name: 'Keren',
            number: '0528309020',
            whatsapp: '0528309020',
            gender: 'neutral'
        },
    ];

    constructor() { }

    ngOnInit() {
    }



}
