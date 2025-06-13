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
    // TODO: implement navigation to subjects management
    console.log('Navegar a administrar asignaturas');
  }

  manageResources() {
    // TODO: implement navigation to resources management
    console.log('Navegar a administrar recursos');
  }
}
