import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
    
})

export class MiComponente {

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){

        this.titulo = "Hola mundo, soy mi componente";
        this.comentario = "Este es mi primer componente";
        this.year = 2021;

        console.log("componente mi-componente cargado exitosamente");
        console.log(this.titulo, this.comentario, this.year);
    }
}