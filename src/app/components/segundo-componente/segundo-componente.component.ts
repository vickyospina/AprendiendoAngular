import { Component } from '@angular/core';

@Component({
  selector: 'segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponente {

  public titulo: string;

  constructor() { 

    this.titulo = "Hola mundo, soy mi segundo componente";
  }


}
