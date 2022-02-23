import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  titulo = 'Listado de empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {

    //this.empleados=this.empleadosService.empleados;

  }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  empleados:Empleado[]=[];
  /*
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "López", "Directora", 7500),
    new Empleado("Pepe", "Martínez", "Jefe sección", 7500),
    new Empleado("Laura", "Vidal", "Administrativo", 7500), ]; 
  */

  agregarEmpleado(){

    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)
    //this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
