import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private token: string | null = null;
  
  constructor(
    private router: Router,
    private toastController: ToastController
  ) {
    this.token = localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  registerUser(user: User): boolean {
    // Obtener los usuarios existentes
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Validar si ya existe un usuario con el mismo email
    if (users.find((u: User) => u.email === user.email)) {
      return false; // ya existe
    }

    // Agregar el nuevo usuario
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  async login(email: string, password: string): Promise<boolean> {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Buscar al usuario por email
    const user = users.find((u: User) => u.email === email && u.password === password);

    if (user) {
      const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substr(2);
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('username', user.username);
      this.token = fakeToken;
      return true;
    }

    // Usuario no encontrado o contraseña incorrecta
    return false;
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.token = null;
    this.router.navigate(['/login']);
  }

  async showToast(message: string, color: string = 'primary'): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

  getToken(): string | null {
    return this.token;
  }
}