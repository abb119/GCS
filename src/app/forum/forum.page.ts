import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service'; // ajusta la ruta si es necesario

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
  standalone: false
})
export class ForumPage implements OnInit {
  messages: any[] = [];
  newMessage = '';

  constructor(private http: HttpClient, private storageService: StorageService) {}

  async ngOnInit() {
    const storedMessages = await this.storageService.get('foro-programacion1');

    if (storedMessages && storedMessages.length) {
      this.messages = storedMessages;
    } else {
      this.http.get<any[]>('/assets/data/forum-messages.json').subscribe(data => {
        this.messages = data;
        this.storageService.set('foro-programacion1', data); // guarda en IonicStorage
      });
    }
  }

  async sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        user: 'Tú',
        text: this.newMessage,
        type: 'text'
      });
      this.newMessage = '';
      await this.storageService.set('foro-programacion1', this.messages); // guarda actualización
    }
  }

  async deleteMessage(index: number) {
    this.messages.splice(index, 1);
    await this.storageService.set('foro-programacion1', this.messages); // vuelve a guardar
  }
}
