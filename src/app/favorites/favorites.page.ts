import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Note, NotesService } from '../services/notes.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false,
})
export class FavoritesPage implements OnInit {
  favoriteNotes: any[] = [];
  notes: any[] = [];

  constructor(
    private storageService: StorageService,
    private notesService: NotesService,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    // Get favorite indices
    const indicesRaw =
      (await this.storageService.get('favorite-notes')) || '[]';
    let favoriteIndices: number[];
    console.log('Raw favorite indices:', indicesRaw);
    try {
      const parsed = indicesRaw; // JSON.parse(indicesRaw)
      console.log('Parsed favorite indices:', parsed);
      if (Array.isArray(parsed)) {
        favoriteIndices = parsed;
      } else if (typeof parsed === 'number') {
        favoriteIndices = [parsed];
      } else {
        favoriteIndices = [];
      }
    } catch {
      favoriteIndices = [];
    }

    // Get all notes
    this.notesService.getPracticeNotes().subscribe((notes) => {
      this.notes = notes;

      // Map indices to notes
      this.favoriteNotes = favoriteIndices
        .map((idx) => this.notes[idx])
        .filter((note) => note !== undefined);

      console.log('Índices de notas favoritas:', favoriteIndices);
      console.log('Todas las notas:', this.notes);
      console.log('Notas favoritas cargadas:', this.favoriteNotes);
    });
  }

  isNoteFavorite(noteId: string): boolean {
    return this.favoriteNotes.includes(noteId);
  }

  async toggleFavorite(note: Note) {
    const index = this.favoriteNotes.indexOf(note.id);

    if (index !== -1) {
      // Eliminar de favoritos
      this.favoriteNotes.splice(index, 1);
      this.presentToast('Eliminado de favoritos');
    } else {
      // Agregar a favoritos
      this.favoriteNotes.push(note.id);
      this.presentToast('Añadido a favoritos');
    }

    // Guardar en localStorage
    await this.storageService.set('favorite-notes', this.favoriteNotes);
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
