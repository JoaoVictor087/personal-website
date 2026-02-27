import { Routes } from '@angular/router';
import {Contact} from './pages/contact/contact';
import {Professional} from './pages/professional/professional';
import {Resume} from './pages/resume/resume';
import {Home} from './pages/home/home';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "contact", component: Contact},
  {path: "professional", component: Professional},
  {path: "resume", component: Resume},
  {path: "**", redirectTo: ""}
];
