import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// --------------------------- COMPONENTES ---------------------------------------------------

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './corpo/menu/menu.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RedesSociaisComponent } from './corpo/redes-sociais/redes-sociais.component';
import { CertificadosComponent } from './corpo/certificados/certificados.component';
import { ProjetosComponent } from './corpo/projetos/projetos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreComponent } from './corpo/sobre/sobre.component';
import { HistoricoProfissionalComponent } from './corpo/historico-profissional/historico-profissional.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CorpoComponent,
    RedesSociaisComponent,
    CertificadosComponent,
    ProjetosComponent,
    SobreComponent,
    HistoricoProfissionalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES),
    SwiperModule, BrowserAnimationsModule,
    MatDialogModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule, MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
