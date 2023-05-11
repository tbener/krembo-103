import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialerPage } from './dialer.page';

const routes: Routes = [
  {
    path: '',
    component: DialerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialerPageRoutingModule {}
