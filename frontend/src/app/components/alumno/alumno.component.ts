import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

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

}
