import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: false
})
export class AdminPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/profile']);
  }

  manageSubjects() {
    this.router.navigate(['/admin/manage-subjects']);
  }

  manageResources() {
    this.router.navigate(['/admin/manage-resources']);
  }
}
