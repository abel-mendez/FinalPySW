import { Ejercicio } from "./ejercicio";

export class Rutina {
  _id:string;
  duracion:string;
  grupo_muscular:string;
  ejercicios:Array<Ejercicio>;
  constructor(){
    this.ejercicios= new Array<Ejercicio>();
  }
}
