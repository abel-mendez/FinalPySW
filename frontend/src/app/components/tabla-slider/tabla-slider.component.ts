import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/models/plan';
import { Slider } from 'src/app/models/slider';
import { PlanService } from 'src/app/services/home/plan.service';
import { SliderService } from 'src/app/services/home/slider.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tabla-slider',
  templateUrl: './tabla-slider.component.html',
  styleUrls: ['./tabla-slider.component.css']
})
export class TablaSliderComponent implements OnInit {

  slider: Slider = new Slider();
  sliders: Array<Slider> = new Array<Slider>();
  plan: Plan = new Plan();
  planes: Array<Plan> = new Array<Plan>();

  constructor(private sliderService: SliderService,
    private router: Router,
    private toastr: ToastrService,
    private planService:PlanService,
    private loginService:LoginService){

    this.sliders = new Array<Slider>();
    this.cargarSliders();
    this.planes = new Array<Plan>();
    this.cargarPlanes();
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
  seleccionar(slider){
   
    this.slider=slider;
    console.log(this.slider);
  }

  seleccionarPlan(plan){
   
    this.plan=plan;
    console.log(this.plan);
  }

  onFileChanged(e) {
    console.log(e);
    this.slider.img = e[0].base64;
    console.log(this.slider)
  }

  //Slider
  agregarSlider() {
    this.sliderService.postSlider(this.slider).subscribe(
      result => {
        this.toastr.success("El Slider se agregó correctamente", "Operación exitosa");
        this.sliders = new Array<Slider>();
        this.cargarSliders();
        this.slider=new Slider();
      },
      error => {
       console.log(error);
      });
  }

  cargarSliders() {
    this.sliderService.getSliders().subscribe(
      result => {
        result.forEach(element => {
          var slider = new Slider();
          Object.assign(slider, element);
          this.sliders.push(slider);
        });
      },
      error => {
       alert('Error al cargar los Sliders')
      }
    )
  }

  eliminarSlider(slider: Slider) {
    this.sliderService.deleteSlider(slider).subscribe(
      result => {
        console.log(result);
        this.toastr.info("El Slider se eliminó correctamente", "Operación exitosa");
        this.sliders = new Array<Slider>();
        this.cargarSliders();
      },
      error => {
        console.log("el slider no se ha podido eliminar")
      }
    );
  }

  /*cargarSlider(slider:Slider) {
    this.sliderService.getSlider(slider).subscribe(
      result=>{
          let slider = new Slider();
          Object.assign(slider);
          this.sliders.push(slider);
          console.log("aaaaaa"+result);
      },
      error=>{
        console.log(error);
        alert("Error al cargar los Alumnos");
      }
    )
  }*/

  modificarSlider(slider: Slider) {
   this.sliderService.modificarSlider(slider).subscribe(
    result=>{
      this.toastr.info("El Slider se modificó correctamente", "Operación exitosa");
      this.sliders = new Array<Slider>();
      this.cargarSliders();
      this.slider = new Slider();
    },
    error=>{
      console.log(error);
    }
   )
  }

  //Plan
  agregarPlan() {
    this.planService.postPlan(this.plan).subscribe(
      result => {
        this.toastr.success("El Plan se agregó correctamente", "Operación exitosa");
        this.planes = new Array<Plan>();
        this.cargarPlanes();
        this.plan = new Plan();
      },
      error => {
        console.log(error);
      });
  }

  cargarPlanes(){
    this.planService.getPlanes().subscribe(
      result => {
        result.forEach(element => {
          var plan = new Plan();
          Object.assign(plan, element);
          this.planes.push(plan);
        
        });
      },
      error => {

      }
    )
  }

  modificarPlan(plan:Plan) {
    this.planService.modificarPlan(plan).subscribe(
     result=>{
       this.toastr.info("El Plan se modificó correctamente", "Operación exitosa");
       this.planes = new Array<Plan>();
       this.cargarPlanes();
       this.plan = new Plan();
     },
     error=>{
       console.log(error);
     }
    )
   }

  eliminarPlan(plan:Plan) {
    this.planService.deletePlan(plan).subscribe(
      result => {
        console.log(result);
        this.toastr.info("El Plan se eliminó correctamente", "Operación exitosa");
        this.planes = new Array<Plan>();
        this.cargarPlanes();
      },
      error => {
        console.log(error)
        console.log("el plan no se ha podido eliminar")
      }
    );
  }

}
