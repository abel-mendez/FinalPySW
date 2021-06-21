import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  perfil:string=sessionStorage.getItem("perfil");

  constructor(public loginService: LoginService) {
 }

  ngOnInit(): void {
    
  }

  logout(){
    this.loginService.logout();
  }
}
