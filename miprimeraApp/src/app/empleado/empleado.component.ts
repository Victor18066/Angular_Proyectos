import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";

  apellido="Díaz";

  edad=22; //private

  empresa="Google"

  cambiaEmpresa(event:Event){

    this.empresa=((<HTMLInputElement>event.target).value);
  }

  /*getEdad(){

    return this.edad;
  } */

  //llamaEmpresa(value:String){}

  habilitacionCuadro=false;

  usuRegistrado=true;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){

    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){

    //alert ("El usuario se ha registrado")

    //this.textoDeRegistro="El usuario se acaba de registrar"

    //alert(event.target);

    if((<HTMLInputElement>event.target).value=="si") {

      this.textoDeRegistro="El usuario se acaba de registrar";

    }else{

      this.textoDeRegistro="No hay nadie registrado";

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
