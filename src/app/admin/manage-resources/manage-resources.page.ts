import { Component, OnInit } from '@angular/core';
import { NotesService, Note } from '../../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-resources',
  templateUrl: './manage-resources.page.html',
  styleUrls: ['./manage-resources.page.scss'],
  standalone: false
})
export class ManageResourcesPage implements OnInit {
  notes: Note[] = [];

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getPracticeNotes().subscribe((p) => {
      this.notes = p;
      this.notesService.getTheoryNotes().subscribe((t) => {
        this.notes = this.notes.concat(t);
      });
    });
  }

  goBack() {
    this.router.navigate(['/admin']);
  }

  removeNote(note: Note) {
    this.notes = this.notes.filter((n) => n !== note);
  }
}
