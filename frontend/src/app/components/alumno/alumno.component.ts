import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Pago } from 'src/app/models/pago';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { Progreso } from 'src/app/models/progreso';
import { Rutina } from 'src/app/models/rutina';
import { Ejercicio } from 'src/app/models/ejercicio';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  ejercicios: Array<Ejercicio> = Array<Ejercicio>();
  ejercicio: Ejercicio = new Ejercicio();
  rutinas:Array<Rutina> = Array<Rutina>();
  rutina:Rutina = new Rutina();
  progreso: Progreso = new Progreso();
  progresos: Array<Progreso> = new Array<Progreso>();
  asistencia: Asistencia = new Asistencia();
  asistencias: Array<Asistencia> = new Array<Asistencia>();
  alumno: Alumno = new Alumno();
  alumnos: Array<Alumno> = new Array<Alumno>();
  pago: Pago = new Pago();
  pagos: Array<Pago> = new Array<Pago>();
  id:string;
  usuarioAlumno:string=sessionStorage.getItem("user")

  constructor(private loginService: LoginService,
    private router: Router,
    private alumnoService: AlumnoService,
    private toast: ToastrService) {
    if (this.loginService.userLoggedIn() == true) {
      if (sessionStorage.getItem("perfil") == "alumno") {
      } else {
        this.toast.warning("No posee los permisos necesarios", "Error")
        //alert("No posee los permisos necesarios")
        this.router.navigate(['home']);
      }
    } else {
      this.toast.info("Debe loguearse para continuar", "Usuario no identificado")
      //alert("Debe Loguearse para continuar")
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    //console.log(this.id);
    
    
  }

  mostrarIdAlumno(){
    console.log(this.usuarioAlumno+ "    sesionstorag");
    //console.log(this.getAllAlumnos());
    console.log(this.alumnos[0].usuario.usuario)
    //if(this.usuarioAlumno == this.alumnoService.){

    //}
  }

  getAllAlumnos(){
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAllAlumnos().subscribe(
      result=>{
        result.forEach(element => {
          let vAlumno = new Alumno();
          Object.assign(vAlumno,element);
          this.alumnos.push(vAlumno);
          console.log(result);
          console.log("usuarioAlumno"+vAlumno.usuario.usuario)
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar los Alumnos");
      }
    )
  }

  getAsistencias(id: string) {
    this.alumnoService.getAsistencias(id).subscribe(
      result => {
        result.forEach(element => {
          let vAsistencia = new Asistencia();
          Object.assign(vAsistencia, element);
          this.asistencias.push(vAsistencia);
          console.log(result);
        });
      }
    )
  }

  imprimirAsistencia(){

  }

  imprimirPago(){

  }

  getPagos(id: string){
    this.pagos = new Array<Pago>();
    this.alumnoService.getPagos(id).subscribe(
      result => {
        result.forEach(element => {
          let vPago = new Pago();
          Object.assign(vPago, element);
          this.pagos.push(vPago);
        });
      },
      error => {
        console.log(error);
        alert("Error al cargar los pagos");
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

  getRutinas(id:string){
    this.rutinas = new Array<Rutina>();
    this.alumnoService.getRutinas(id).subscribe(
      result=>{
        result.forEach(element => {
          let vRutina = new Rutina();
          Object.assign(vRutina,element);
          this.rutinas.push(vRutina);
          console.log(result);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar las rutinas");
      }
    )
  }

  getEjercicios(idRutina:string){
    this.ejercicios = new Array<Ejercicio>();
    this.alumnoService.getEjercicios(this.alumno._id, idRutina).subscribe(
      result=>{
        result.forEach(element => {
          let vEjercicio = new Ejercicio();
          Object.assign(vEjercicio,element);
          this.ejercicios.push(vEjercicio);
          console.log(result);
          console.log(this.ejercicios);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar los ejercicios");
      }
    )
  }
}
