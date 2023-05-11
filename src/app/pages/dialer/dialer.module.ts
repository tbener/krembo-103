import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialerPageRoutingModule } from './dialer-routing.module';

import { DialerPage } from './dialer.page';
import { PageComponentsModule } from '../page-components/page-components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DialerPageRoutingModule,
        PageComponentsModule
    ],
    declarations: [
      DialerPage
    ]
})
export class DialerPageModule { }
