import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

interface UserData {
  id: number;
  name: string;
  description: string;
  currentYear: string;
  password: string;
  photo?: string;
}

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
  standalone: false
})
export class ProfileEditPage implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  
  // Datos originales para comparar cambios
  originalUserData!: UserData;
  
  // Datos actuales que se editarán
  userData: UserData = {
    id: 1,
    name: 'Alejandro',
    description: 'Ingeniero informático pero no programador',
    currentYear: 'Primero',
    password: 'messigoat',
    photo: ''
  };
  
  // URL de la foto de usuario
  userPhoto: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg';
  
  // Variable para almacenar la nueva foto seleccionada
  selectedFile: File | null = null;

  constructor(
    private router: Router,
    private location: Location,
    private toastController: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    // TODO: Obtener datos del usuario de la base de datos
    /*
    const userId = localStorage.getItem('userId');
    
    this.userService.getUserById(userId).subscribe(
      (userData) => {
        this.userData = userData;
        this.originalUserData = {...userData}; // Copia para comparar cambios
        this.userPhoto = userData.photo || null;
      },
      (error) => {
        console.error('Error al cargar datos del usuario:', error);
      }
    );
    */
    
    // Por ahora, guardamos una copia de los datos iniciales
    this.originalUserData = {...this.userData};
  }

  goBack() {
    this.location.back();
  }

  changePhoto() {
    // Trigger el input file oculto
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    
    if (files && files.length > 0) {
      this.selectedFile = files[0];
      
      // Vista previa de la imagen
      const reader = new FileReader();
      reader.onload = (e) => {
        this.userPhoto = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  async updateProfile() {
    // Verificar si hay cambios
    const hasChanges = this.checkForChanges();
    
    if (!hasChanges && !this.selectedFile) {
      // No hay cambios, mostrar mensaje
      const toast = await this.toastController.create({
        message: 'Datos no actualizados ya que no han sido cambiados',
        duration: 3000,
        color: 'warning'
      });
      toast.present();
      
      // Redirigir a perfil
      this.router.navigate(['/profile']);
      return;
    }
    
    // TODO: Actualizar datos en la base de datos
    /*
    const formData = new FormData();
    formData.append('name', this.userData.name);
    formData.append('description', this.userData.description);
    formData.append('currentYear', this.userData.currentYear);
    
    if (this.userData.password) {
      formData.append('password', this.userData.password);
    }
    
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile);
    }
    
    this.userService.updateUserProfile(formData).subscribe(
      async (response) => {
        // Actualización exitosa
        const toast = await this.toastController.create({
          message: 'Datos actualizados correctamente',
          duration: 3000,
          color: 'success'
        });
        toast.present();
        
        // Actualizar localStorage si es necesario
        if (this.userData.name !== this.originalUserData.name) {
          localStorage.setItem('username', this.userData.name);
        }
        
        // Redirigir a perfil
        this.router.navigate(['/profile']);
      },
      async (error) => {
        // Error en la actualización
        const toast = await this.toastController.create({
          message: 'Ha habido un error al actualizar los datos',
          duration: 3000,
          color: 'danger'
        });
        toast.present();
        
        // Redirigir a perfil
        this.router.navigate(['/profile']);
      }
    );
    */
    
    // Simulación de actualización exitosa
    try {
      // Simulamos un proceso asíncrono
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Actualizar localStorage para mantener los cambios
      if (this.userData.name !== this.originalUserData.name) {
        localStorage.setItem('username', this.userData.name);
      }
      
      // Mostrar mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Datos actualizados correctamente',
        duration: 3000,
        color: 'success'
      });
      toast.present();
      
      // Redirigir a perfil
      this.router.navigate(['/profile']);
    } catch (error) {
      // Mostrar mensaje de error
      const toast = await this.toastController.create({
        message: 'Ha habido un error al actualizar los datos',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
      
      // Redirigir a perfil
      this.router.navigate(['/profile']);
    }
  }

  // Método para verificar si hay cambios en los datos
  checkForChanges(): boolean {
    return Boolean(
      this.userData.name !== this.originalUserData.name ||
      this.userData.description !== this.originalUserData.description ||
      this.userData.currentYear !== this.originalUserData.currentYear ||
      (this.userData.password && this.userData.password !== this.originalUserData.password)
    );
  }
}
