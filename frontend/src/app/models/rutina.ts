import { Ejercicio } from "./ejercicio";

export class Rutina {
  _id:string;
  duracion:string;
  grupomuscular:string;
  ejercicios:Array<Ejercicio>;
  constructor(){
    this.ejercicios= new Array<Ejercicio>();
  }
}
