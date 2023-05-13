import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Component({
    selector: 'app-dialer-contact',
    templateUrl: './dialer-contact.component.html',
    styleUrls: ['./dialer-contact.component.scss'],
})
export class DialerContactComponent implements OnInit {
    @Input() contact!: Contact;

    constructor() { }

    ngOnInit() { }

    call(contact: Contact) {
        // Make a call to the contact's phone number.
        // Display a nice message.
        alert(`Calling ${contact.name}`);
    }

}
