import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.page.html',
  styleUrls: ['./add-notes.page.scss'],
  standalone: false,
})
export class AddNotesPage implements OnInit {
  selectedFiles: File[] = [];

  constructor() {}

  ngOnInit() {}

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  addNewNote() {
    if (this.selectedFiles.length === 0) {
      alert('Por favor, selecciona un archivo.');
      return;
    }

    // Example: Add a note for each selected file
    const notes = JSON.parse(localStorage.getItem('practice-notes') || '[]');
    this.selectedFiles.forEach((file) => {
      notes.push({
        id: Date.now() + Math.random(), // unique id
        title: file.name,
        description: '',
        subjectId: '',
        date: new Date(),
      });
    });
    localStorage.setItem('practice-notes', JSON.stringify(notes));
    alert('Apuntes añadidos correctamente');
    this.selectedFiles = [];
  }
}
