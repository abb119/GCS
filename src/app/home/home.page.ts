import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  username: string = 'Alejandro'; // Valor por defecto

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener nombre de usuario almacenado o usar el valor por defecto
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  goToProfile() {
    console.log('Navegando al perfil del usuario');
    this.router.navigate(['/profile']);
  }

  goToCourse(courseNumber: number) {
    console.log(`Navegando al curso ${courseNumber}`);
    
    // Redirigir según el curso seleccionado
    switch(courseNumber) {
      case 1:
      this.router.navigate(['/first-year']);
      break;
      case 2:
        this.router.navigate(['/second-year']);
        break;
      case 3:
        this.router.navigate(['/third-year']);
        break;
      case 4:
        this.router.navigate(['/fourth-year']);
        break;
    }
  }

  logout() {
    this.authService.logout();
  }
}
