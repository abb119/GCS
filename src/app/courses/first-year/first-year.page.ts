import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CourseDataService, Subject } from '../../services/course-data.service';

@Component({
  selector: 'app-first-year',
  templateUrl: './first-year.page.html',
  styleUrls: ['./first-year.page.scss'],
  standalone: false
})
export class FirstYearPage implements OnInit {
  username: string = 'Iker'; // Valor por defecto
  subjects: Subject[] = [];
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private location: Location,
    private courseDataService: CourseDataService
  ) { }

  ngOnInit() {
    this.loadUsername();
    this.loadSubjects();
  }

  loadUsername() {
    // Obtener nombre de usuario almacenado o usar el valor por defecto
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  loadSubjects() {
    this.isLoading = true;
    this.courseDataService.getSubjectsByCourseYear(1).subscribe(
      (subjects) => {
        this.subjects = subjects;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al cargar asignaturas:', error);
        this.isLoading = false;
      }
    );
  }

  goBack() {
    this.location.back();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToSubject(subjectId: number) {
    console.log(`Navegando a la asignatura ${subjectId}`);
    // Por ahora, simplemente volvemos a home
    this.router.navigate(['/subject-detail', subjectId]);
  }
}
