import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

// Interfaz para adaptar las notas del servicio a nuestro formato
interface Note {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  date: string;
}

@Component({
  selector: 'app-practice-notes',
  templateUrl: './practice-notes.page.html',
  styleUrls: ['./practice-notes.page.scss'],
  standalone: false
})
export class PracticeNotesPage implements OnInit {
  subjectId: string = '';
  notes: Note[] = [];
  filteredNotes: Note[] = [];
  favoriteNotes: string[] = []; // Array de IDs de notas favoritas
  searchTerm: string = '';
  username: string = 'Manolo';

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private toastController: ToastController,
    private notesService: NotesService
  ) { }

  ngOnInit() {
    this.subjectId = this.route.snapshot.paramMap.get('subjectId') || '';
    console.log('SubjectId obtenido:', this.subjectId);

    // Obtener nombre de usuario almacenado si existe
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }

    this.loadNotes();
    this.loadFavorites();
  }

  loadNotes() {
    console.log('Cargando notas desde el servicio...');
    
    // Usar el servicio NotesService para obtener las notas
    this.notesService.getPracticeNotes().subscribe({
      next: (serviceNotes: any[]) => {
        console.log('Notas obtenidas del servicio:', serviceNotes);
        
        if (serviceNotes && serviceNotes.length > 0) {
          // Las notas ya vienen directamente en el formato correcto del JSON
          const adaptedNotes: Note[] = serviceNotes.map(note => ({
            id: note.id,
            title: note.title,
            description: note.description,
            subjectId: note.subjectId,
            date: note.date  // Usa la propiedad 'date' en lugar de 'uploadDate'
          }));
          
          console.log('Notas adaptadas:', adaptedNotes);
          
          // Mostrar todas las notas sin filtrar por subjectId
          this.notes = [...adaptedNotes];
          console.log('Todas las notas:', this.notes);
          
          this.filteredNotes = [...this.notes];
        } else {
          console.log('No se encontraron notas en el servicio');
          this.loadBackupNotes();
        }
      },
      error: (error) => {
        console.error('Error al cargar notas desde el servicio:', error);
        this.loadBackupNotes();
      }
    });
  }

  // Método de respaldo con datos estáticos en caso de error
  loadBackupNotes() {
    console.log('Cargando notas de respaldo...');
    const backupNotes: Note[] = [
      {
        id: "1",
        title: "Apuntes tema 2",
        description: "Resúmenes del segundo tema de programación 1.",
        subjectId: "P1",
        date: "2025-06-04"
      },
      {
        id: "2",
        title: "Apuntes tema 3",
        description: "Resúmenes del tercer tema de programación 1.",
        subjectId: "P1",
        date: "2025-04-28"
      },
      {
        id: "3",
        title: "Preguntas tipo test resueltas",
        description: "Recopilación de preguntas de tipo test del examen final",
        subjectId: "P1",
        date: "2025-05-15"
      }
    ];
    
    this.notes = [...backupNotes];
    this.filteredNotes = [...this.notes];
    console.log('Notas de respaldo cargadas:', this.notes);
  }

  async loadFavorites() {
    try {
      const favorites = await this.storageService.get('favorite-notes') || [];
      this.favoriteNotes = favorites;
      console.log('Favoritos cargados:', this.favoriteNotes);
    } catch (error) {
      console.error('Error al cargar favoritos:', error);
      this.favoriteNotes = [];
    }
  }

  filterNotes() {
    if (!this.searchTerm.trim()) {
      this.filteredNotes = [...this.notes];
      return;
    }
    
    const term = this.searchTerm.toLowerCase();
    this.filteredNotes = this.notes.filter(note => 
      note.title.toLowerCase().includes(term) || 
      note.description.toLowerCase().includes(term)
    );
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

  isNoteFavorite(noteId: string): boolean {
    return this.favoriteNotes.includes(noteId);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  addNewNote() {
    // Placeholder para futura funcionalidad
    this.presentToast('Funcionalidad de añadir apuntes en desarrollo');
  }
}
