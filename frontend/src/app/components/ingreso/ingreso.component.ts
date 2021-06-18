import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Plan } from 'src/app/models/plan';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { PlanService } from 'src/app/services/home/plan.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  planes: Array<Plan> = new Array<Plan>();
  alumno:Alumno= new Alumno();
  asistencias: Array<Asistencia> = new Array<Asistencia>();

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private alumnoService:AlumnoService,
              private planService:PlanService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
          this.getPlanes();
          this.getAsistencias(params.id);
          this.cargarAlumno(params.id);
    });
  }

  getPlanes(){
    this.planes = new Array<Plan>();
    this.planService.getPlanes().subscribe(
      result=>{
        result.forEach(element => {
          let vPlan = new Plan();
          Object.assign(vPlan,element);
          this.planes.push(vPlan);
          console.log(result);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar los planes");
      }
    )
  }

  getAsistencias(id:string){
    this.asistencias = new Array<Asistencia>();
    this.alumnoService.getAsistencias(id).subscribe(
      result=>{
        result.forEach(element => {
          let vAsistencia = new Asistencia();
          Object.assign(vAsistencia,element);
          this.asistencias.push(vAsistencia);
          console.log(result);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar las asistencias");
      }
    )
  }

  cargarAlumno(id:string){
    this.alumnoService.getAlumno(id).subscribe(
      result=>{
        Object.assign(this.alumno,result);
        this.alumno.plan = this.planes.find(p=>(p._id == this.alumno.plan._id))
        console.log(this.alumno.plan);
      },
      error=>{
        console.log(error);
      }
    )
  }

  volver(){
    this.router.navigate(["alumnos"]);
  }

}
