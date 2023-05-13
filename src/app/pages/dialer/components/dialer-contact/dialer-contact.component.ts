import { Component, Input, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

import { Contact } from 'src/app/interfaces/contact';

@Component({
    selector: 'app-dialer-contact',
    templateUrl: './dialer-contact.component.html',
    styleUrls: ['./dialer-contact.component.scss'],
})
export class DialerContactComponent implements OnInit {
    @Input() contact!: Contact;

    constructor(private callNumber: CallNumber) { }

    ngOnInit() { }

    call() {
        this.callNumber.callNumber(this.contact.number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }

}
