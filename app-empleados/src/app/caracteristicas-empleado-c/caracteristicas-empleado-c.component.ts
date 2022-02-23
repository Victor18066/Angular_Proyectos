import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio2:ServicioEmpleadosService) { } //

  ngOnInit(): void {
  }

  agregarCaracteristicas(value:string){
    
    this.miServicio2.muestraMensaje(value); //
    this.caracteristicasEmpleados.emit(value); //

  }

}
