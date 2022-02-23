import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';

  mensaje="";

  registrado=false;

  nombre:string="";
  apellido:string="";
  cargo:string="";

  entradas:any; //entradas:object[];

  constructor(){

    this.entradas=[

      {titulo:"Python cada día más presente"},
      {titulo:"Java cada día más presente"},
      {titulo:"Angular cada día más presente"},
      {titulo:"C++ cada día más presente"},
      {titulo:"Kotlin cada día más presente"},
    ]

  }

  registrarUsuario(){

    this.registrado=true;

    this.mensaje="usuario registrado con éxito";

  }
}
