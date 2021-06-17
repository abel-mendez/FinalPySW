import { Asistencia } from "./asistencia";
import { Pago } from "./pago";
import { Plan } from "./plan";
import { Progreso } from "./progreso";
import { Rutina } from "./rutina";
import { Usuario } from "./usuario";

export class Alumno {
  _id:String;
  apellido:string;
  nombre:string;
  dni:number;
  fechanac:string;
  fechainicio:string;
  celular:string;
  domicilio:string;
  email:string;
  pagos:Pago;
  plan:Plan;
  asistencias:Array<Asistencia>;
  usuario:Usuario;
  progresos:Array<Progreso>;
  rutinas:Array<Rutina>;
  constructor(){
    
  }
}
