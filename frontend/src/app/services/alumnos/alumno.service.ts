import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { Asistencia } from 'src/app/models/asistencia';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Pago } from 'src/app/models/pago';
import { Progreso } from 'src/app/models/progreso';
import { Rutina } from 'src/app/models/rutina';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private _http:HttpClient) { }

  urlbase:string="http://localhost:3000/api/";

  getAllAlumnos():Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno", option);
   }

   getAlumnoByDNI(dni:number):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/dni/"+dni, option); 
   }

   addAlumno(alumno:Alumno):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(alumno);
    return this._http.post(this.urlbase+"alumno", body, option);
   }

   updateAlumno(){
     
   }

   getAlumno(id:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+id, option); 
   }

   //asistencias
   addAsistencia(idAlumno:string, asistencia:Asistencia):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(asistencia);
    return this._http.post(this.urlbase+"alumno/"+idAlumno+"/asistencias", body, option);
   }

   getAsistencias(id:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+id+"/asistencias", option);
    
   }

   //Pagos

   getPagos(id: string):Observable<any>{
     let option = {
       headers: new HttpHeaders({

       }),
       params: new HttpParams({

       })
     }
     return this._http.get(this.urlbase + "alumno/" + id + "/pagos", option);
   }

   addPago(idalumno: string, pago:Pago):Observable<any>{
     let option = {
       headers: new HttpHeaders({
        "Content-Type": "application/json"
       }),
       params: new HttpParams({

       })
     }
     let body = JSON.stringify(pago);
     return this._http.post(this.urlbase + "alumno/" + idalumno + "/pagos", body, option);
   }

   //progresos
   addProgreso(idAlumno:string, progreso:Progreso):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(progreso);
    return this._http.post(this.urlbase+"alumno/"+idAlumno+"/progresos", body, option);
   }

   getProgresos(idAlumno:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/progresos", option);
   }

   //rutinas
   addRutina(idAlumno:string, rutina:Rutina):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(rutina);
    return this._http.post(this.urlbase+"alumno/"+idAlumno+"/rutinas", body, option);
   }

   getRutinas(idAlumno:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/rutinas", option);
   }

   
   getRutina(idAlumno:string, idRutina):Observable<any>{
    let option = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina, option); 
   }

   updateRutina(idAlumno:string, rutina:Rutina):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(rutina);
    return this._http.put(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+rutina._id, body, option);
  }

   //ejercicios
   getEjercicios(idAlumno:string, idRutina):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina+"/ejercicios", option);
   }

   addEjercicio(idAlumno:string, idRutina:string, ejercicio:Ejercicio):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(ejercicio);
    return this._http.post(this.urlbase+"alumno/"+idAlumno+"/rutinas/"+idRutina+"/ejercicios", body, option);
   }

}
