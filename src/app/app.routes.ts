import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Bugs } from './bugs/bugs';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'bugs', component: Bugs },
];
