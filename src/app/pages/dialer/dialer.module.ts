import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialerPageRoutingModule } from './dialer-routing.module';

import { DialerPage } from './dialer.page';
import { PageComponentsModule } from '../page-components/page-components.module';
import { DialerContactComponent } from './components/dialer-contact/dialer-contact.component';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DialerPageRoutingModule,
        PageComponentsModule,

    ],
    declarations: [
      DialerPage,
      DialerContactComponent
    ],
    providers: [
      CallNumber,
    ]
})
export class DialerPageModule { }
