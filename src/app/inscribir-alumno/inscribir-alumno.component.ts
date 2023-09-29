import { Component, OnInit } from '@angular/core';
import { ServiceColegioService } from '../service-colegio.service';

@Component({
  selector: 'co-inscribir-alumno',
  templateUrl: './inscribir-alumno.component.html',
  styleUrls: ['./inscribir-alumno.component.css']
})
export class InscribirAlumnoComponent implements OnInit {


  materiasCargadas:any[] = []
  nombreAlumno:string = ""
  materiaSeleccionada: string = '';

  constructor(private servicioCole: ServiceColegioService) {}

  ngOnInit(): void {
    this.materiasCargadas = this.servicioCole.getMateria();
  }

  guardarAlumno() {
    if (this.materiaSeleccionada) {
      let materia = this.materiasCargadas.find(m => m.nombre === this.materiaSeleccionada);
      if (materia && materia.cupo > materia.inscritos) {
        materia.inscritos++;
        this.servicioCole.inscribirAlumno({ nombre: this.nombreAlumno, materia: this.materiaSeleccionada });
        alert('Alumno inscripto!');
      } else {
        alert('Cupos agotados');
      }
    } else {
      alert('Seleccione una materia antes de guardar.');
    }
  }

}
