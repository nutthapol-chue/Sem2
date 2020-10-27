import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppnotePage } from './appnote.page';

const routes: Routes = [
  {
    path: '',
    component: AppnotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppnotePageRoutingModule {}
