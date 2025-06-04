import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MenuController, AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UserDocumentsService, UserDocument } from '../services/user-documents.service';

interface UserData {
  id: number;
  name: string;
  description: string;
  currentYear: string;
  photo?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  // Datos de ejemplo para el usuario
  userData: UserData = {
    id: 1,
    name: 'Alejandro',
    description: 'Ingeniero informático pero no programador',
    currentYear: 'Primero',
    photo: ''
  };

  userPhoto: string | null = null;
  
  // Lista de documentos que ahora se cargará desde el servicio
  userDocuments: UserDocument[] = [];
  
  // Estado de carga
  isLoadingDocuments: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private menuController: MenuController,
    private alertController: AlertController,
    private toastController: ToastController,
    private authService: AuthService,
    private userDocumentsService: UserDocumentsService // Inyectar el nuevo servicio
  ) { }

  ngOnInit() {
    this.loadUserData();
    this.loadUserDocuments();
  }

  ionViewDidEnter() {
    console.log('Vista de perfil cargada correctamente');
  }

  loadUserData() {
    // TODO: Obtener datos del usuario de la base de datos
    /*
    const userId = localStorage.getItem('userId');
    
    this.userService.getUserById(userId).subscribe(
      (userData) => {
        this.userData = userData;
        this.userPhoto = userData.photo || null;
      },
      (error) => {
        console.error('Error al cargar datos del usuario:', error);
      }
    );
    */
    
    // Usamos datos de ejemplo por ahora
    this.userPhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg';
    console.log('Datos de usuario cargados');
  }

  loadUserDocuments() {
    this.isLoadingDocuments = true;
    
    // TODO: Pasar el ID del usuario real cuando esté implementado
    // const userId = this.userData.id;
    
    this.userDocumentsService.getUserDocuments().subscribe(
      (documents) => {
        this.userDocuments = documents;
        this.isLoadingDocuments = false;
        console.log('Documentos cargados:', this.userDocuments.length);
      },
      (error) => {
        console.error('Error al cargar documentos del usuario:', error);
        this.isLoadingDocuments = false;
        this.showErrorToast('Error al cargar los documentos');
      }
    );
  }

  goBack() {
    console.log('Volviendo atrás');
    this.location.back();
  }

  async openMenu() {
    console.log('Intentando abrir menú');
    try {
      await this.menuController.open('profileMenu');
      console.log('Menú abierto');
    } catch (error) {
      console.error('Error al abrir el menú:', error);
    }
  }

  closeMenu() {
    console.log('Cerrando menú');
    this.menuController.close('profileMenu');
  }

  editProfile() {
    console.log('Editar perfil');
    this.router.navigate(['/profile-edit']);
  }

  async downloadDocument(document: UserDocument) {
    console.log('Descargando documento:', document.name);
    
    // Mostrar toast de descarga iniciada
    const toast = await this.toastController.create({
      message: `Iniciando descarga de ${document.fileName}`,
      duration: 2000,
      color: 'primary'
    });
    await toast.present();

    // Simular descarga usando el servicio
    this.userDocumentsService.downloadDocument(document).subscribe(
      (blob) => {
        // TODO: Implementar descarga real
        /*
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = document.fileName;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
        */
        
        console.log('Descarga simulada completada');
        this.showSuccessToast(`${document.fileName} descargado correctamente`);
      },
      (error) => {
        console.error('Error al descargar documento:', error);
        this.showErrorToast('Error al descargar el documento');
      }
    );
  }

  async deleteDocument(document: UserDocument) {
    console.log('Eliminando documento:', document.name);
    
    // Mostrar confirmación antes de eliminar
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que deseas eliminar "${document.name}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.performDeleteDocument(document);
          }
        }
      ]
    });
    
    await alert.present();
  }

  private performDeleteDocument(document: UserDocument) {
    this.userDocumentsService.deleteDocument(document.id).subscribe(
      (success) => {
        if (success) {
          console.log('Documento eliminado correctamente');
          // Actualizar la lista eliminando el documento
          this.userDocuments = this.userDocuments.filter(doc => doc.id !== document.id);
          this.showSuccessToast('Documento eliminado correctamente');
        } else {
          this.showErrorToast('Error al eliminar el documento');
        }
      },
      (error) => {
        console.error('Error al eliminar documento:', error);
        this.showErrorToast('Error al eliminar el documento');
      }
    );
  }

  goToHome() {
    console.log('Navegando a home');
    this.menuController.close();
    this.router.navigate(['/home']);
  }

  logout() {
    console.log('Cerrando sesión');
    this.menuController.close();
    this.authService.logout();
  }

  // Métodos de ayuda para mostrar toasts
  private async showSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

  private async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }
}
