import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // rota padrão
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
];


