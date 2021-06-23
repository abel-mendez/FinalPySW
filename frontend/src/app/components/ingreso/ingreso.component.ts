import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Pago } from 'src/app/models/pago';
import { Plan } from 'src/app/models/plan';
import { Progreso } from 'src/app/models/progreso';
import { Rutina } from 'src/app/models/rutina';
import { Usuario } from 'src/app/models/usuario';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { PlanService } from 'src/app/services/home/plan.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  accion:string="new";
  accionEj:string="new";
  accionAsist:string="new";
  accionProg:string="new";
  progreso: Progreso = new Progreso();
  progresos:Array<Progreso> = new Array<Progreso>();
  planes: Array<Plan> = new Array<Plan>();
  alumno:Alumno= new Alumno();
  asistencias: Array<Asistencia> = new Array<Asistencia>();
  asistencia:Asistencia = new Asistencia();
  usuario: Usuario = new Usuario();
  pagos: Array<Pago> = new Array<Pago>();
  pago: Pago = new Pago();
  mediospago: string[] = ["Efectivo", "Transferencia bancaria", "Tarjeta de Crédito", "Tarjeta de débito"];
  rutina: Rutina = new Rutina();
  rutinas:Array<Rutina> = new Array<Rutina>();
  ejercicios:Array<Ejercicio> = new Array<Ejercicio>();
  ejercicio:Ejercicio = new Ejercicio();

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private alumnoService:AlumnoService,
              private planService:PlanService,
              private toastr: ToastrService,
              private loginService:LoginService ) {
                if(this.loginService.userLoggedIn()==true){
                  if(sessionStorage.getItem("perfil")== "entrenador"){

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
    this.activatedRoute.params.subscribe(
      params => {
          this.getPlanes();
          this.getProgresos(params.id);
          this.getAsistencias(params.id);
          this.cargarAlumno(params.id);
          this.getRutinas(params.id);
          this.getPagos(params.id);
          this.pago.completado = true;
          this.usuario.activo = true;
          this.pago.modopago = "Efectivo";
          this.usuario.perfil = "Alumno";
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

  actualizarAlumno(form: NgForm){
    this.alumnoService.updateAlumno(this.alumno).subscribe(
      result => {
        if (result.status == "1"){
          this.toastr.info("El alumno se modificó correctamente", "Operación exitosa");
          this.cargarAlumno(this.alumno._id);
        }
      },
      error => {
        console.log(error);
        this.toastr.error("Error al modificar el alumno", "Operación fallida");
      }
    )
  }

  volver(){
    this.router.navigate(["alumnos"]);
  }


  //asistencias
  
  nuevaAsistencia(){
    this.asistencia=new Asistencia();
    this.accionAsist="new";
  }

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


  updateAsistencia(form:NgForm){
    this.alumnoService.updateAsistencia(this.asistencia).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success("La asistencia se modificó correctamente", "Operación exitosa");
          this.getAsistencias(this.alumno._id);
          form.reset();
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al modificar la asistencia", "Operación fallida");
      }
    )
  }

  cargarAsistencia(idAsistencia:string){
    this.accionAsist="update";
    this.alumnoService.getAsistencia(idAsistencia).subscribe(
      result=>{
        Object.assign(this.asistencia,result);
        console.log(this.asistencia);
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

  usarAsistenciaSeleccionada(asistencia:Asistencia){
    this.asistencia= asistencia;
  }

  eliminarAsistencia(){
    this.alumnoService.deleteAsistencia(this.asistencia._id).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.info("Asistencia eliminada correctamente","Operación exitosa");
          this.getAsistencias(this.alumno._id);
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al eliminar la asistencia","Operación fallida");
      }
    )
  }

  //Usuario

  agregarUsuario(form: NgForm){
    this.alumnoService.addUsuario(this.alumno._id, this.usuario).subscribe(
      result => {
        if (result.status == "1"){
          this.toastr.success("El usuario se agregó correctamente", "Operación exitosa");
          form.reset();
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  //Pagos

  agregarPago(form: NgForm){
    this.alumnoService.addPago(this.alumno._id, this.pago).subscribe(
      result => {
        if(result.status == "1"){
          this.toastr.success("El pago se agregó correctamente", "Operación exitosa");
          this.getPagos(this.alumno._id);
          form.reset();  //no deberia ir form reset ni en agregar pago ni en agregar 
          //alumno, explicar bug
        }
        console.log(result);
      },
      error => {
        console.log(error);
      }
      



    )
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

//progresos

nuevoProgreso(){
  this.progreso=new Progreso();
  this.accionProg="new";
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

  onFileChanged(file){
    this.progreso.foto = file[0].base64
    console.log(this.progreso);
  }

  agregarProgreso(form:NgForm){
    if(this.progreso.foto!=null){
      this.alumnoService.addProgreso(this.alumno._id,this.progreso).subscribe(
        result=>{
          if(result.status=="1"){
            this.toastr.success("Progreso agregado correctamente", "Operación exitosa");
            this.getProgresos(this.alumno._id);
            form.reset();
          }
        },
        error=>{
          console.log(error);
          this.toastr.error("Error al cargar el progreso", "Operación fallida");
        }
      )
    }
    else{
      this.toastr.error("Error al cargar el progreso, debe cargar una imagen", "Operación fallida");
    }
    
  }


  cargarProgreso(idProgreso:string){

    this.getEjercicios(idProgreso);
    this.accionProg="update";
    this.alumnoService.getProgreso(this.alumno._id,idProgreso).subscribe(
      result=>{
        Object.assign(this.progreso,result);
        console.log(this.progreso);

      },
      error=>{
        console.log(error);
      }
    )
  }


  updateProgreso(form:NgForm){
    console.log(this.progreso);
    this.alumnoService.updateProgreso(this.alumno._id, this.progreso).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success("El progreso se modificó correctamente", "Operación exitosa");
          this.getProgresos(this.alumno._id);
          form.reset();
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al modificar el progreso", "Operación fallida");
      }
    )
  }

  usarProgresoSeleccionado(progreso:Progreso){
    this.progreso=progreso;
  }

  eliminarProgreso(){
    this.alumnoService.deleteProgreso(this.alumno._id, this.progreso._id).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.info("Progreso eliminado correctamente","Operación exitosa");
          this.getProgresos(this.alumno._id);
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al eliminar el progreso","Operación fallida");
      }
    )

  }


  //rutinas
  nuevaRutina(){
    this.rutina=new Rutina();
    this.accion="new";
  }

  agregarRutina(form:NgForm){
      this.alumnoService.addRutina(this.alumno._id,this.rutina).subscribe(
        result=>{
          if(result.status=="1"){
            this.toastr.success("Rutina agregada correctamente", "Operación exitosa");
            this.getRutinas(this.alumno._id);
            form.reset();
          }
        },
        error=>{
          console.log(error);
          this.toastr.error("Error al agregar la rutina", "Operación fallida");
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

  cargarRutina(idRutina:string){
    this.getEjercicios(idRutina);
    this.accion="update";
    this.alumnoService.getRutina(this.alumno._id,idRutina).subscribe(
      result=>{
        Object.assign(this.rutina,result);
        console.log(this.rutina);

      },
      error=>{
        console.log(error);
      }
    )
  }

  updateRutina(form:NgForm){
    console.log(this.rutina);
    this.alumnoService.updateRutina(this.alumno._id, this.rutina).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success("La rutina se modificó correctamente", "Operación exitosa");
          this.getRutinas(this.alumno._id);
          form.reset();
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al modificar la rutina", "Operación fallida");
      }
    )
  }

  usarRutinaSeleccionada(rutina:Rutina){
    this.rutina=rutina;
  }


  eliminarRutina(){
    this.alumnoService.deleteRutina(this.alumno._id, this.rutina._id).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.info("Rutina eliminada correctamente","Operación exitosa");
          this.getRutinas(this.alumno._id);
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al eliminar la rutina","Operación fallida");
      }
    )

  }

  

//ejercicios
nuevoEjercicio(){
  this.ejercicio=new Ejercicio();
  this.accionEj="new";
}

usarEjercicioSeleccionado(ejercicio:Ejercicio){
  this.ejercicio=ejercicio;
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

  agregarEjercicio(form:NgForm){
    console.log(this.rutina);
    this.alumnoService.addEjercicio(this.alumno._id,this.rutina._id,this.ejercicio).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success("Ejercicio agregado correctamente", "Operación exitosa");
          this.getEjercicios(this.rutina._id);
          form.reset();
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al agregar el ejercicio", "Operación fallida");
      }
    )
  }

  cargarEjercicio(idEjercicio:string){
    this.accionEj="update";
    this.alumnoService.getEjercicio(this.alumno._id,this.rutina._id, idEjercicio).subscribe(
      result=>{
        Object.assign(this.ejercicio,result);
        console.log(this.ejercicio);
      },
      error=>{
        console.log(error);
      }
    )
  }

  updateEjercicio(form:NgForm){
    console.log(this.rutina);
    this.alumnoService.updateEjercicio(this.alumno._id, this.rutina._id, this.ejercicio).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.success("El ejercicio se modificó correctamente", "Operación exitosa");
          this.getEjercicios(this.rutina._id);
          form.reset();
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al modificar el ejercicio", "Operación fallida");
      }
    )
  }

  eliminarEjercicio(){
    console.log(this.rutina, this.ejercicio);
    this.alumnoService.deleteEjercicio(this.alumno._id, this.rutina._id, this.ejercicio._id).subscribe(
      result=>{
        if(result.status=="1"){
          this.toastr.info("Ejercicio eliminado correctamente","Operación exitosa");
          this.getEjercicios(this.rutina._id);
        }
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al eliminar el ejercicio","Operación fallida");
      }
    )
  }

}
