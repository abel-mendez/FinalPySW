import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

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
    return this._http.get(this.urlbase+"alumno/"+dni, option); 
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

   getAsistencias(idAlumno:string):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.urlbase+"alumno/"+idAlumno+"/asistencias", option);
   }

}
