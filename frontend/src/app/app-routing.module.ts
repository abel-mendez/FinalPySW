import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { LoginComponent } from './components/login/login.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'alumnos',component:TablaAlumnosComponent},
  {path:'login',component:LoginComponent},
  {path:'alumno',component: AlumnoComponent},
  {path:'alumnos/nuevo',component: IngresoComponent},
  {path:'alumnos/:id',component: IngresoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
