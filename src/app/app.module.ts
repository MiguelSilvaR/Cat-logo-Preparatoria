import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from '@angular/material/expansion'
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { EticaIComponent } from './materias/primer-semestre/etica-i/etica-i.component';
import { MatematicasIComponent } from './materias/primer-semestre/matematicas-i/matematicas-i.component';
import { LecturaIComponent } from './materias/primer-semestre/lectura-i/lectura-i.component';
import { InglesIComponent } from './materias/primer-semestre/ingles-i/ingles-i.component';
import { QuimicaIComponent } from './materias/primer-semestre/quimica-i/quimica-i.component';
import { InformaticaIComponent } from './materias/primer-semestre/informatica-i/informatica-i.component';
import { MetodologiaComponent } from './materias/primer-semestre/metodologia/metodologia.component';
import { EticaIIComponent } from './materias/segundo-semestre/etica-ii/etica-ii.component';
import { MatematicasIIComponent } from './materias/segundo-semestre/matematicas-ii/matematicas-ii.component';
import { LecturaIIComponent } from './materias/segundo-semestre/lectura-ii/lectura-ii.component';
import { InglesIIComponent } from './materias/segundo-semestre/ingles-ii/ingles-ii.component';
import { QuimicaIIComponent } from './materias/segundo-semestre/quimica-ii/quimica-ii.component';
import { InformaticaIIComponent } from './materias/segundo-semestre/informatica-ii/informatica-ii.component';
import { SocialesComponent } from './materias/segundo-semestre/sociales/sociales.component';
import { VisorPdfComponent } from './visor-pdf/visor-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    EticaIComponent,
    MatematicasIComponent,
    LecturaIComponent,
    InglesIComponent,
    QuimicaIComponent,
    InformaticaIComponent,
    MetodologiaComponent,
    EticaIIComponent,
    MatematicasIIComponent,
    LecturaIIComponent,
    InglesIIComponent,
    QuimicaIIComponent,
    InformaticaIIComponent,
    SocialesComponent,
    VisorPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    NgbModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
