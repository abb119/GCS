import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseDataService, Subject } from '../services/course-data.service';

interface SubjectDetail {
  id: number;
  name: string;
  description: string;
  course: string;
  icon: string;
}

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.page.html',
  styleUrls: ['./subject-detail.page.scss'],
  standalone: false
})
export class SubjectDetailPage implements OnInit {
  username: string = 'Alejandro'; // Valor por defecto
  
  // Datos de la asignatura actual
  subjectData: SubjectDetail = {
    id: 101,
    name: 'Programación 1',
    description: 'Asignatura donde se enseñan las bases de programación, desde variables y bucles hasta funciones y clases.',
    course: 'Primero',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#6a0dad" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
             <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
             <line x1="8" y1="6" x2="16" y2="6"></line>
             <line x1="8" y1="10" x2="16" y2="10"></line>
             <line x1="8" y1="14" x2="16" y2="14"></line>
             <line x1="8" y1="18" x2="16" y2="18"></line>
           </svg>`
  };

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private courseDataService: CourseDataService
  ) { }

  ngOnInit() {
    this.loadUsername();
    this.loadSubjectData();
  }

  loadUsername() {
    // Obtener nombre de usuario almacenado o usar el valor por defecto
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  loadSubjectData() {
    // Obtener el ID de la asignatura de los parámetros de la ruta
    const subjectId = this.route.snapshot.paramMap.get('id');
    
    if (subjectId) {
      // TODO: En el futuro, cargar los datos de la asignatura desde el servicio
      /*
      this.courseDataService.getSubjectById(parseInt(subjectId)).subscribe(
        (subject) => {
          this.subjectData = {
            id: subject.id,
            name: subject.name,
            description: subject.description,
            course: this.getCourseNameById(subject.courseYear),
            icon: subject.icon
          };
        },
        (error) => {
          console.error('Error al cargar datos de la asignatura:', error);
        }
      );
      */
      
      // Por ahora, usar datos estáticos basados en el ID
      this.setSubjectDataById(parseInt(subjectId));
    }
  }

  // Método temporal para establecer datos basados en el ID
  private setSubjectDataById(subjectId: number) {
    // Datos estáticos para diferentes asignaturas
    const subjectsData: { [key: number]: SubjectDetail } = {
      101: {
        id: 101,
        name: 'Programación 1',
        description: 'Asignatura donde se enseñan las bases de programación, desde variables y bucles hasta funciones y clases.',
        course: 'Primero',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#6a0dad" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                 <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                 <line x1="8" y1="6" x2="16" y2="6"></line>
                 <line x1="8" y1="10" x2="16" y2="10"></line>
                 <line x1="8" y1="14" x2="16" y2="14"></line>
                 <line x1="8" y1="18" x2="16" y2="18"></line>
               </svg>`
      },
      102: {
        id: 102,
        name: 'Matemáticas 1',
        description: 'Fundamentos matemáticos aplicados a la informática, incluyendo álgebra lineal y cálculo diferencial.',
        course: 'Primero',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#6a0dad" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                 <polygon points="3 3 21 3 21 21"></polygon>
                 <path d="M21 3l-7 7"></path>
                 <path d="M12 12l-7 7"></path>
               </svg>`
      }
      // Puedes añadir más asignaturas aquí
    };

    if (subjectsData[subjectId]) {
      this.subjectData = subjectsData[subjectId];
    }
  }

  goBack() {
    console.log('Volviendo atrás');
    this.location.back();
  }

  goToProfile() {
    console.log('Navegando al perfil del usuario');
    this.router.navigate(['/profile']);
  }

  goToTheory() {
    console.log('Navegando a Teoría');
    // TODO: Navegar a la página de teoría cuando esté implementada
    // this.router.navigate(['/theory', this.subjectData.id]);
    
    // Por ahora, volver a home
    console.log('Navegando a Teoría');
    this.router.navigate(['/theory-notes', this.subjectData.id]);

  }

  goToPractices() {
    console.log('Navegando a Prácticas');
    // TODO: Navegar a la página de prácticas cuando esté implementada
    // this.router.navigate(['/practices', this.subjectData.id]);
    
    console.log('Navegando a Prácticas');
    this.router.navigate(['/practice-notes', this.subjectData.id]);
  }

  goToForum() {
    console.log('Navegando al Foro de difusión');
    this.router.navigate(['/forum']);
  }  
}
