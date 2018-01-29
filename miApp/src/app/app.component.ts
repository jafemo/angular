import { Component } from '@angular/core';
@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  selector: 'primeraComponente'
})

/*EN PRIMER LUGAR DEFINIMOS LAS VARIABLES*/
export class AppComponent {
 title = 'app';
 nombre:string;
 apellidos:string;
 nacimiento:number;
 localidad:string;
 cuenta:number;
 trabajo:number;

/*LUEGO LOS EVENTOS*/
color(event){
  this.cuenta = event.target.value;
}
opcion(event){
  this.trabajo = event.target.value;
}

escribir(event){
  var id = event.target.id;
  if (id == 'nombre'){
  this.nombre = event.target.value;
  }else if(id == 'apellidos'){
  this.apellidos = event.target.value;
  }else if(id == 'localidad'){
  this.localidad = event.target.value;
  }
}


}
