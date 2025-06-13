import { Component, OnInit } from '@angular/core';
import { CourseDataService, Subject } from '../../services/course-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.page.html',
  styleUrls: ['./manage-subjects.page.scss'],
  standalone: false
})
export class ManageSubjectsPage implements OnInit {
  subjects: Subject[] = [];
  newName = '';

  constructor(private courseData: CourseDataService, private router: Router) {}

  ngOnInit() {
    for (let year = 1; year <= 4; year++) {
      this.courseData.getSubjectsByCourseYear(year).subscribe((subs) => {
        this.subjects = [...this.subjects, ...subs];
      });
    }
  }

  goBack() {
    this.router.navigate(['/admin']);
  }

  addSubject() {
    const name = this.newName.trim();
    if (!name) return;
    const newSubject: Subject = { id: Date.now(), name, icon: '' };
    this.subjects.push(newSubject);
    this.newName = '';
  }

  removeSubject(sub: Subject) {
    this.subjects = this.subjects.filter((s) => s !== sub);
  }
}
