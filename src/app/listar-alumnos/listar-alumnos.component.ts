import { Component, OnInit } from '@angular/core';
import { ServiceColegioService } from '../service-colegio.service';

@Component({
  selector: 'co-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  alumnosInscritos:any[] = []
  constructor(private coleService : ServiceColegioService) { }
  ngOnInit(): void {
    this.alumnosInscritos = this.coleService.getAlumnosInscritos()
    
  }

}
