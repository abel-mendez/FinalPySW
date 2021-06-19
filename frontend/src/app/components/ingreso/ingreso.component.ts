import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Plan } from 'src/app/models/plan';
import { Progreso } from 'src/app/models/progreso';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { PlanService } from 'src/app/services/home/plan.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  progreso: Progreso = new Progreso();
  progresos:Array<Progreso> = new Array<Progreso>();
  planes: Array<Plan> = new Array<Plan>();
  alumno:Alumno= new Alumno();
  asistencias: Array<Asistencia> = new Array<Asistencia>();
  asistencia:Asistencia = new Asistencia();

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private alumnoService:AlumnoService,
              private planService:PlanService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
          this.getPlanes();
          this.getProgresos(params.id);
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
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar los planes");
      }
    )
  }

  cargarAlumno(id:string){
    this.alumnoService.getAlumno(id).subscribe(
      result=>{
        Object.assign(this.alumno,result);
        this.alumno.plan = this.planes.find(p=>(p._id == this.alumno.plan._id))
      },
      error=>{
        console.log(error);
      }
    )
  }

  volver(){
    this.router.navigate(["alumnos"]);
  }


  //asistencias
  
  agregarAsistencia(form: NgForm){
    console.log(this.alumno._id);
    this.alumnoService.addAsistencia(this.alumno._id,this.asistencia).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success("La asistencia se agregó correctamente", "Operación exitosa");
          this.getAsistencias(this.alumno._id);
          form.reset();
        }
        console.log(result);
      },
      error=>{
        console.log(error);
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
          console.log(this.asistencias);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar las asistencias");
      }
    )
  }

  getProgresos(id:string){
    this.progresos = new Array<Progreso>();
    this.alumnoService.getProgresos(id).subscribe(
      result=>{
        result.forEach(element => {
          let vProgreso = new Progreso();
          Object.assign(vProgreso,element);
          this.progresos.push(vProgreso);
          console.log(result);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar los progresos");
      }
    )
  }
}
