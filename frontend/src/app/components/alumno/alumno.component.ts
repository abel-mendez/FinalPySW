import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(public loginService:LoginService,
    public router:Router) {
    if(this.loginService.userLoggedIn()==true){
      alert("Debe Loguearse para continuar")
      router.navigate(['login']);
    }else{
      
    }
   }

  ngOnInit(): void {
  }

}
