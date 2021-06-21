import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tabla-slider',
  templateUrl: './tabla-slider.component.html',
  styleUrls: ['./tabla-slider.component.css']
})
export class TablaSliderComponent implements OnInit {

  constructor(private router:Router,
    private loginService:LoginService) { 
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
  }

}
