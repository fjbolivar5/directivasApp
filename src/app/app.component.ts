import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje:string="";
  registrado=false;
  nombre="";
  apellido="";

  entradas: object[];

  constructor(){
    this.entradas=[
      {titulo:"Python cada día mas presente"},
      {titulo:"Java presente desde hace mas de 20 años"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"}
    ]
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado con éxito.";
  }
  

}
