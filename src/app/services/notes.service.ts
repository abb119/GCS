import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface Note {
  id: number;
  title: string;
  description: string;
  subjectId: number;
  subjectName: string;
  type: 'theory' | 'practices' | 'forum';
  author: string;
  uploadDate: string;
  downloads: number;
  rating: number;
  fileSize: string;
  fileName: string;
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todos los apuntes de prácticas
   * @returns Observable con lista de apuntes de prácticas
   */
  getPracticeNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('assets/data/practice-notes.json')
      .pipe(
        catchError(error => {
          console.error('Error al cargar apuntes de prácticas:', error);
          return of([]); // Retorna array vacío en caso de error
        })
      );
  }

  getTheoryNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('assets/data/theory-notes.json')
      .pipe(
        catchError(error => {
          console.error('Error al cargar apuntes de prácticas:', error);
          return of([]); // Retorna array vacío en caso de error
        })
      );
  }

  /**
   * Obtiene apuntes filtrados por asignatura y tipo
   * @param subjectId ID de la asignatura
   * @param type Tipo de apuntes (theory, practices, forum)
   * @returns Observable con apuntes filtrados
   */
  getNotesBySubjectAndType(subjectId: number, type: string): Observable<Note[]> {
    return this.getPracticeNotes().pipe(
      map(notes => notes.filter(note => 
        note.subjectId === subjectId && note.type === type
      ))
    );
  }

  /**
   * Busca apuntes por título o descripción
   * @param query Término de búsqueda
   * @param notes Lista de apuntes donde buscar
   * @returns Array filtrado de apuntes
   */
  searchNotes(query: string, notes: Note[]): Note[] {
    if (!query.trim()) {
      return notes;
    }
    
    const searchTerm = query.toLowerCase();
    return notes.filter(note => 
      note.title.toLowerCase().includes(searchTerm) ||
      note.description.toLowerCase().includes(searchTerm) ||
      note.author.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Simula marcar/desmarcar como favorito
   * @param noteId ID del apunte
   * @returns Observable<boolean> indicando si fue exitoso
   */
  toggleFavorite(noteId: number): Observable<boolean> {
    // TODO: Implementar en base de datos real
    console.log(`Toggling favorite for note ${noteId}`);
    return of(true);
  }

  /**
   * Simula la descarga de un apunte
   * @param note Apunte a descargar
   * @returns Observable<Blob> con el archivo
   */
  downloadNote(note: Note): Observable<Blob> {
    // TODO: Implementar descarga real
    console.log(`Descargando: ${note.fileName}`);
    return of(new Blob(['Contenido simulado del archivo'], { type: 'application/pdf' }));
  }
}
