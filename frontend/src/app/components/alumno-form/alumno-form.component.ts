import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Plan } from 'src/app/models/plan';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { PlanService } from 'src/app/services/home/plan.service';
import { LoginService } from 'src/app/services/login/login.service';

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
              private toast:ToastrService,
              private loginService:LoginService) { 
                if(this.loginService.userLoggedIn()==true){
                  if(sessionStorage.getItem("perfil")== "entrenador"){

                  }else{
                    this.toast.warning("No posee los permisos necesarios", "Error")
                    this.router.navigate(['home']);
                  }
                }else{
                  this.toast.info("Debe loguearse para continuar", "Usuario no identificado")
                  this.router.navigate(['login']);
                }
              }

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
        });
      },
      error=>{
        this.toast.error("Error al cargar los planes" ,"Operación fallida");
      }
    )
  }

  agregarAlumno(){
    this.alumnoService.addAlumno(this.alumno).subscribe(
      result=>{
        if(result.status=="1"){
          this.toast.success("El alumno se agregó correctamente", "Operación exitosa");
          this.router.navigate(["alumnos"]);
        }
      },
      error=>{
        this.toast.error("Error al agregar el alumno", "Operación fallida");
      }

    )
  }

  volver(){
    this.router.navigate(["alumnos"]);
  }
}
