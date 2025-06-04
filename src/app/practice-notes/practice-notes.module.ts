import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeNotesPageRoutingModule } from './practice-notes-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { PracticeNotesPage } from './practice-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeNotesPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [PracticeNotesPage],
  providers: [ HttpClient ]
})
export class PracticeNotesPageModule {}
