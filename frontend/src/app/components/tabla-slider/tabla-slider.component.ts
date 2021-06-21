import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/models/plan';
import { Slider } from 'src/app/models/slider';
import { PlanService } from 'src/app/services/home/plan.service';
import { SliderService } from 'src/app/services/home/slider.service';

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
    private planService:PlanService
  ) {
    this.sliders = new Array<Slider>();
    this.cargarSliders();
    this.planes = new Array<Plan>();
    this.cargarPlanes();
  }

  ngOnInit(): void {
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
        console.log(result);
        this.sliders = new Array<Slider>();
        this.cargarSliders();
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
          console.log(result)
        });
      },
      error => {
        console.log(error);
      }
    )
  }

  cargarSlider(slider:Slider) {
    this.sliderService.getSlider(slider).subscribe(
      result => {
            Object.assign(this.slider, result);
            this.slider = this.sliders.find(p=>(p._id == this.slider._id));
            console.log(this.slider);
        
      },
      error => {
        console.log(error);
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

  modificarSlider(slider: Slider) {
    this.slider = new Slider();
    this.cargarSlider(slider);
    this.sliderService.modificarSlider(slider).subscribe(
      result => {
        console.log(result);
        this.toastr.info("Pasaje fue actualizado correctamente","Operacion Exitosa")
      },
      error => {

      }
    )
  }

  //Plan
  agregarPlan() {
    this.planService.postPlan(this.plan).subscribe(
      result => {
        this.toastr.success("El Plan se agregó correctamente", "Operación exitosa");
        console.log(result);
        this.planes = new Array<Plan>();
        this.cargarPlanes();
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
          console.log(result)
        });
      },
      error => {
        console.log(error);
      }
    )
  }

}
