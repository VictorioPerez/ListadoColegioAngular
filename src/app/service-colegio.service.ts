import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceColegioService {

  constructor() { }
  materias:any[] = []
  alumnosInscritos: any[] = [];

  inscribirAlumno(alumno: any) {
    this.alumnosInscritos.push(alumno);
  }

  getAlumnosInscritos() {
    return this.alumnosInscritos;
  }

  cargarMateriaService(objeto:any){
    this.materias.push(objeto)
    return this.materias
  }
  getMateria(){
    return this.materias
  }

}
