import {  Routes } from '@angular/router';

import { CorpoComponent } from './corpo/corpo.component';
import { CertificadosComponent } from './corpo/certificados/certificados.component';
import { ProjetosComponent } from './corpo/projetos/projetos.component';
import { SobreComponent } from './corpo/sobre/sobre.component';
import { HistoricoProfissionalComponent } from './corpo/historico-profissional/historico-profissional.component';

export const ROUTES: Routes = [
  { path: 'home', component: CorpoComponent },
  { path: '', component: CorpoComponent },
  { path: ' ', component: CorpoComponent },
  { path: 'certificados', component: CertificadosComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'historicoprofissional', component: HistoricoProfissionalComponent}

  ]
