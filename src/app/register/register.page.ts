import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  acceptTerms: boolean = false;
  showPassword: boolean = false;
  
  isValidEmail: boolean = false;
  hasMinLength: boolean = false;
  hasUpperCase: boolean = false;
  hasNumber: boolean = false;
  isValidPassword: boolean = false;
  private readonly EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  validateEmail() {
    if (!this.email) {
      this.isValidEmail = false;
      return;
    }
    
    this.isValidEmail = this.EMAIL_REGEX.test(this.email);
  }

  validatePassword() {
    if (!this.password) {
      this.hasMinLength = false;
      this.hasUpperCase = false;
      this.hasNumber = false;
      this.isValidPassword = false;
      return;
    }
    
    this.hasMinLength = this.password.length >= 8;
    this.hasUpperCase = /[A-Z]/.test(this.password);
    this.hasNumber = /[0-9]/.test(this.password);
    
    this.isValidPassword = this.hasMinLength && this.hasUpperCase && this.hasNumber;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  isValidForm() {
    return this.username && 
           this.isValidEmail && 
           this.isValidPassword && 
           this.acceptTerms;
  }

  async register() {
    if (!this.isValidForm()) {
      return;
    }
    
    // Simulación de registro exitoso (sería reemplazado por registro real)
    const toast = await this.toastController.create({
      message: 'Registro exitoso. Inicia sesión.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
    
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 2000);
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
