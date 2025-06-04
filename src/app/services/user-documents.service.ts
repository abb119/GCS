import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface UserDocument {
  id: number;
  name: string;
  fileName: string;
  subjectId: number;
  subjectName: string;
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserDocumentsService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene todos los documentos del usuario actual
   * @param userId ID del usuario (opcional, por ahora no se usa)
   * @returns Observable con lista de documentos del usuario
   */
  getUserDocuments(userId?: number): Observable<UserDocument[]> {
    return this.http.get<UserDocument[]>('assets/data/user-documents.json')
      .pipe(
        catchError(error => {
          console.error('Error al cargar documentos del usuario:', error);
          return of([]); // Retorna array vacío en caso de error
        })
      );
  }

  /**
   * Obtiene documentos filtrados por asignatura
   * @param subjectId ID de la asignatura
   * @returns Observable con documentos de esa asignatura
   */
  getDocumentsBySubject(subjectId: number): Observable<UserDocument[]> {
    return this.getUserDocuments().pipe(
      map(documents => documents.filter(doc => doc.subjectId === subjectId))
    );
  }

  /**
   * Simula la eliminación de un documento
   * @param documentId ID del documento a eliminar
   * @returns Observable<boolean> indicando si fue exitoso
   */
  deleteDocument(documentId: number): Observable<boolean> {
    // TODO: Implementar eliminación real en la base de datos
    /*
    return this.http.delete<any>(`api/documents/${documentId}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
    */
    
    // Simulación de eliminación exitosa
    return of(true);
  }

  /**
   * Simula la descarga de un documento
   * @param document Documento a descargar
   * @returns Observable<Blob> con el archivo
   */
  downloadDocument(document: UserDocument): Observable<Blob> {
    // TODO: Implementar descarga real desde la base de datos/servidor
    /*
    return this.http.get(document.downloadUrl, { responseType: 'blob' });
    */
    
    // Simulación de descarga
    console.log(`Descargando: ${document.fileName}`);
    return of(new Blob(['Contenido simulado del archivo'], { type: 'application/octet-stream' }));
  }
}
