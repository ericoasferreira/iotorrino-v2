import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ExamesComponent } from './pages/exames/exames.component';
import { TratamentosComponent } from './pages/tratamentos/tratamentos.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: { breadcrumb: 'Home' }
  },
  { 
    path: 'sobre', 
    component: SobreComponent,
    data: { breadcrumb: 'Sobre' }
  },
  { 
    path: 'contato', 
    component: ContatoComponent,
    data: { breadcrumb: 'Contato' }
  },
  { 
    path: 'exames', 
    component: ExamesComponent,
    data: { breadcrumb: 'Contato' }
  },
  { 
    path: 'tratamentos', 
    component: TratamentosComponent,
    data: { breadcrumb: 'Contato' }
  },
  { 
    path: 'artigos', 
    component: ArtigosComponent,
    data: { breadcrumb: 'Contato' }
  },
];


