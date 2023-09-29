import { Component, OnInit } from '@angular/core';
import { ServiceColegioService } from '../service-colegio.service';


@Component({
  selector: 'co-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {

  constructor(private serviceCole : ServiceColegioService) { }
  materia:string = ""
  cupo:number = 0
  
  guardarMateria(){
  if(this.materia != ""  && this.cupo != null && this.cupo > 0){
      let objMateria:any = {
        nombre: this.materia,
        cupo: this.cupo,
        inscritos: 0
      }
    let materiaExistente = this.serviceCole.materias.find(( materias:any ) =>  materias.nombre.toLowerCase() == this.materia.toLowerCase())

    if(!materiaExistente ){ //Condicional para comprobar que la materia que cargue no este cargada ya
      let materiaCargada = this.serviceCole.cargarMateriaService(objMateria)
      console.log(materiaCargada);
      alert("materia cargada con exito")
    } else alert("La materia que quieres ingresar ya existe!")

  } else alert("Campos vacios o invalidos!")
}









  ngOnInit(): void {
  }

}
