import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  asistencias:Array<Asistencia> = Array<Asistencia>();
  alumno:Alumno = new Alumno();

  pago:Pago = new Pago();
  pagos:Array<Pago> = Array<Pago>();

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
  }

  cargarPagos(){
    
  }

  getAsistencias(id:string){
    this.alumnoService.getAsistencias(id).subscribe(
      result=>{
        result.forEach(element => {
          let vAsistencia = new Asistencia();
          Object.assign(vAsistencia,element);
          this.asistencias.push(vAsistencia);
          console.log(result);
        });
      }
    )
  }
}
