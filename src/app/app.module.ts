import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';
import { InscribirAlumnoComponent } from './inscribir-alumno/inscribir-alumno.component';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CrearMateriaComponent,
    InscribirAlumnoComponent,
    ListarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
