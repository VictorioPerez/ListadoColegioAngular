import { Component } from '@angular/core';

@Component({
  selector: 'co-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-challange';
  componenteActivo: string = 'crearMateria'; // Valor inicial, muestra el componente "Crear Materia"

  cambiarComponente(componente: string) {
    this.componenteActivo = componente;
  }
}
