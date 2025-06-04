import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: false
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    // Navegar a la página de login cuando esté implementada
    this.router.navigateByUrl('/login');
    console.log('Navegando a login');
  }

  register() {
    // Navegar a la página de registro cuando esté implementada
    this.router.navigateByUrl('/register');
    console.log('Navegando a registro');
  }
}
