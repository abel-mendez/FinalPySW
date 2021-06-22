import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  asistencias:Array<Asistencia> = Array<Asistencia>();
  alumno:Alumno = new Alumno();
  constructor(private loginService:LoginService,
    private router:Router) {
    if(this.loginService.userLoggedIn()==true){
      if(sessionStorage.getItem("perfil")== "alumno"){

      }else{
        alert("No posee los permisos necesarios")
      this.router.navigate(['home']);
      }
    }else{
      alert("Debe Loguearse para continuar")
      this.router.navigate(['login']);
    }
   }

  ngOnInit(): void {
  }
/*
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
  }*/
}
