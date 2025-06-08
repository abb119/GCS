import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Note, NotesService } from '../services/notes.service';
import { ToastController } from '@ionic/angular';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false,
})
export class FavoritesPage implements OnInit, ViewWillEnter {
  favoriteNotes: any[] = [];
  notes: any[] = [];
  favoriteIndices: any[] = []; // Array para almacenar los índices de notas favoritas

  constructor(
    private storageService: StorageService,
    private notesService: NotesService,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {}

  async ionViewWillEnter() {
    this.favoriteNotes = [];

    this.favoriteIndices =
      (await this.storageService.get('favorite-notes')) || '[]';

    this.notesService.getPracticeNotes().subscribe((notes) => {
      this.notes = notes;
      this.notesService.getTheoryNotes().subscribe((notes) => {
        this.notes = this.notes.concat(notes);
        console.log('Índices de notas favoritas:', this.favoriteIndices);
        console.log('Todas las notas:', this.notes);

        for (let i = 0; i < this.favoriteIndices.length; i++) {
          console.log('Índice favorito:', this.favoriteIndices[i]);
          console.log(
            'Nota favorita:',
            this.notes[this.favoriteIndices[i] - 1]
          );
          this.favoriteNotes.push(this.notes[this.favoriteIndices[i] - 1]);
        }
        console.log('Notas favoritas cargadas:', this.favoriteNotes);
      });
    });
  }

  isNoteFavorite(noteId: string): boolean {
    return true;
  }

  async toggleFavorite(note: Note) {
    const index = this.favoriteIndices.indexOf(note.id);
    console.log('Índice de la nota en favoritos:', index);
    console.log('Nota a eliminar:', note.id);

    this.favoriteIndices.splice(index, 1);
    this.favoriteNotes.splice(index, 1);
    this.presentToast('Eliminado de favoritos');

    // Guardar en localStorage
    await this.storageService.set('favorite-notes', this.favoriteIndices);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
