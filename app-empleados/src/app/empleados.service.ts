import { Empleado } from "./empleado.model";
import { Injectable } from '@angular/core';
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService{

    constructor(private servicioVentanaEmergente:ServicioEmpleadosService){}

    empleados:Empleado[]=[

        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Ana", "López", "Directora", 7500),
        new Empleado("Pepe", "Martínez", "Jefe sección", 7500),
        new Empleado("Laura", "Vidal", "Administrativo", 7500),
    ];
    

    agregarEmpleadoServicio(empleado:Empleado) {

        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + 
            "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);

    }

    encontrarEmpleado(indice:number){

        let empleado:Empleado=this.empleados[indice];

        return empleado;

    }

    actualizarEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

    }

    eliminarEmpleado(indice:number){

        this.empleados.splice(indice, 1);

    }

}