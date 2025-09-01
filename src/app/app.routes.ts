import { Routes } from '@angular/router';
import { Login } from '../app/pages/login/login';
import { Bugs } from '../app/pages/bugs/bugs';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'bugs', component: Bugs },
];
