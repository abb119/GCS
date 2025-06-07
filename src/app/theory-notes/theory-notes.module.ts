import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheoryNotesPageRoutingModule } from './theory-notes-routing.module';

import { TheoryNotesPage } from './theory-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheoryNotesPageRoutingModule
  ],
  declarations: [TheoryNotesPage]
})
export class TheoryNotesPageModule {}
