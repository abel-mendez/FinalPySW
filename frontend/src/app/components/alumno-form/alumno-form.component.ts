import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Plan } from 'src/app/models/plan';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { PlanService } from 'src/app/services/home/plan.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  planes: Array<Plan> = new Array<Plan>();
  alumno: Alumno = new Alumno();

  constructor(private planService:PlanService,
              private alumnoService:AlumnoService,
              private router:Router,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getPlanes();
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

  agregarAlumno(){
    console.log(this.alumno);
    this.alumnoService.addAlumno(this.alumno).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success("El alumno se agregó correctamente", "Operación exitosa");
          this.router.navigate(["alumnos"]);
        }
        console.log(result);
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
