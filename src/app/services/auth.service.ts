import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  async login(email: string, password: string): Promise<boolean> {
    // Esta es una implementación simple para desarrollo
    // En producción, esta validación vendría de un backend
    if (email === 'user@example.com' && password === 'password') {
      const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substr(2);
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('username', 'Usuario Demo');
      this.token = fakeToken;
      return true;
    }
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