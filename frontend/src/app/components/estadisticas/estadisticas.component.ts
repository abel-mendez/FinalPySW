import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor(private loginService:LoginService,
    private router:Router,
    private toastr:ToastrService) { 
      if(this.loginService.userLoggedIn()==true){
        if(sessionStorage.getItem("perfil")== "entrenador"){

        }else{
          this.toastr.warning("No posee los permisos necesarios", "Error")
        this.router.navigate(['home']);
        }
      }else{
        this.toastr.info("Debe loguearse para continuar", "Usuario no identificado")
        this.router.navigate(['login']);
      }
    }

  ngOnInit(): void {
    
  
  }

}
