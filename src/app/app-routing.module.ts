import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'theory-notes/:subjectId',
    loadChildren: () => import('./theory-notes/theory-notes.module').then(m => m.TheoryNotesPageModule)
  },  
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then(m => m.ForumPageModule)
  },  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'first-year',
    loadChildren: () => import('./courses/first-year/first-year.module').then( m => m.FirstYearPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'second-year',
    loadChildren: () => import('./courses/second-year/second-year.module').then( m => m.SecondYearPageModule)
  },
  {
    path: 'third-year',
    loadChildren: () => import('./courses/third-year/third-year.module').then( m => m.ThirdYearPageModule)
  },
  {
    path: 'fourth-year',
    loadChildren: () => import('./courses/fourth-year/fourth-year.module').then( m => m.FourthYearPageModule)
  },
  {
    path: 'subject-detail',
    loadChildren: () => import('./subject-detail/subject-detail.module').then( m => m.SubjectDetailPageModule)
  },
  {
    path: 'subject-detail/:id',
    loadChildren: () => import('./subject-detail/subject-detail.module').then(m => m.SubjectDetailPageModule)
  },
  {
    path: 'practice-notes',
    loadChildren: () => import('./practice-notes/practice-notes.module').then( m => m.PracticeNotesPageModule)
  },
  {
    path: 'practice-notes/:subjectId',
    loadChildren: () => import('./practice-notes/practice-notes.module').then(m => m.PracticeNotesPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'theory-notes',
    loadChildren: () => import('./theory-notes/theory-notes.module').then( m => m.TheoryNotesPageModule)
  }










];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
