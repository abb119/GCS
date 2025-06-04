import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isValidEmail: boolean = false;
  
  // Expresión regular para validar correos electrónicos
  private readonly EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  validateEmail() {
    if (!this.email) {
      this.isValidEmail = false;
      return;
    }
    
    this.isValidEmail = this.EMAIL_REGEX.test(this.email);
  }

  async doLogin() {
    // Solo permitir login si el email es válido
    if (!this.isValidEmail || !this.email || !this.password) {
      return;
    }
    
    const isValid = await this.authService.login(this.email, this.password);
    
    if (isValid) {
      const toast = await this.toastController.create({
        message: '¡Bienvenido!',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      
      this.router.navigateByUrl('/home');
    } else {
      const toast = await this.toastController.create({
        message: 'Credenciales incorrectas',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  }

  forgotPassword() {
    console.log('Redirigiendo a recuperar contraseña');
    // this.router.navigateByUrl('/forgot-password');
  }

  goToRegister() {
    console.log('Redirigiendo a registro');
    this.router.navigateByUrl('/register');
  }
}
