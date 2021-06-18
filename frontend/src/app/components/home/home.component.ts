import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { PlanService } from 'src/app/services/home/plan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  planes: Array<Plan> = new Array<Plan>();
  constructor(private planService:PlanService) { }

  ngOnInit(): void {
    this.getPlanes();
  }

  getPlanes(){
    this.planes = new Array<Plan>();
    this.planService.getPlanes().subscribe(
      result=>{
        result.forEach(element => {
          let vPlan = new Plan();
          Object.assign(vPlan,element);
          this.planes.push(vPlan);
          console.log(result);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar los planes");
      }
    )
  }

}
