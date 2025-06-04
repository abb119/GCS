import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Subject {
  id: number;
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene las asignaturas de un curso específico
   * @param courseYear Número de curso (1, 2, 3 o 4)
   * @returns Observable con lista de asignaturas
   */
  getSubjectsByCourseYear(courseYear: number): Observable<Subject[]> {
    let jsonPath: string;
    
    switch (courseYear) {
      case 1:
        jsonPath = 'assets/data/first-year-subjects.json';
        break;
      case 2:
        jsonPath = 'assets/data/second-year-subjects.json';
        break;
      case 3:
        jsonPath = 'assets/data/third-year-subjects.json';
        break;
      case 4:
        jsonPath = 'assets/data/fourth-year-subjects.json';
        break;
      default:
        throw new Error('Curso no válido');
    }
    
    return this.http.get<Subject[]>(jsonPath);
  }
}
