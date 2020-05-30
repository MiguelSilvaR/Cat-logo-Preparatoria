import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { EticaIComponent } from './materias/primer-semestre/etica-i/etica-i.component';
import { EticaIIComponent } from './materias/segundo-semestre/etica-ii/etica-ii.component';
import { VisorPdfComponent } from './visor-pdf/visor-pdf.component';
import { InformaticaIComponent } from './materias/primer-semestre/informatica-i/informatica-i.component';
import { MatematicasIComponent } from './materias/primer-semestre/matematicas-i/matematicas-i.component';
import { MetodologiaComponent } from './materias/primer-semestre/metodologia/metodologia.component';
import { InglesIComponent } from './materias/primer-semestre/ingles-i/ingles-i.component';
import { LecturaIComponent } from './materias/primer-semestre/lectura-i/lectura-i.component';
import { QuimicaIComponent } from './materias/primer-semestre/quimica-i/quimica-i.component';
import { QuimicaIIComponent } from './materias/segundo-semestre/quimica-ii/quimica-ii.component';
import { InformaticaIIComponent } from './materias/segundo-semestre/informatica-ii/informatica-ii.component';
import { InglesIIComponent } from './materias/segundo-semestre/ingles-ii/ingles-ii.component';
import { LecturaIIComponent } from './materias/segundo-semestre/lectura-ii/lectura-ii.component';
import { MatematicasIIComponent } from './materias/segundo-semestre/matematicas-ii/matematicas-ii.component';
import { SocialesComponent } from './materias/segundo-semestre/sociales/sociales.component';


const routes: Routes = [
  { path: "bienvenida", component: BienvenidaComponent },
  { path: "etica-I/:id", component: EticaIComponent },
  { path: "informatica-I/:id", component: InformaticaIComponent },
  { path: "matematicas-I/:id", component: MatematicasIComponent },
  { path: "ingles-I/:id", component: InglesIComponent },
  { path: "lectura-I/:id", component: LecturaIComponent },
  { path: "quimica-I/:id", component: QuimicaIComponent },
  { path: "metodologia/:id", component: MetodologiaComponent },
  { path: "quimica-II/:id", component: QuimicaIIComponent },
  { path: "etica-II/:id", component: EticaIIComponent },
  { path: "visor/:file", component: VisorPdfComponent },
  { path: "informatica-II/:id", component: InformaticaIIComponent },
  { path: "ingles-II/:id", component: InglesIIComponent },
  { path: "lectura-II/:id", component: LecturaIIComponent },
  { path: "matematicas-II/:id", component: MatematicasIIComponent },
  { path: "sociales/:id", component: SocialesComponent },
  { path: "**", pathMatch: "full", redirectTo: "bienvenida" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
