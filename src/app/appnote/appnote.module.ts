import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppnotePageRoutingModule } from './appnote-routing.module';

import { AppnotePage } from './appnote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppnotePageRoutingModule
  ],
  declarations: [AppnotePage]
})
export class AppnotePageModule {}
