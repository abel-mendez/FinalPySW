import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-statplan',
  templateUrl: './statplan.component.html',
  styleUrls: ['./statplan.component.css']
})
export class StatplanComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
 //public barChartLabels: Label[] = ['Plan Basico', 'Plan Full','Pase Libre'];
  //Tipo de grafico que queremos: ejem: line, bar, radar
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];
  //Datos que vamos a cargar en las graficas 
  public barChartData: ChartDataSets[];
  public chartColors;

  private categoria;
  private dato: string;
  //Arreglo de los datos que vamos a pasar
  private datos = [];
  //Arreglo de las categorias que vamos a pasar
  private nombreCategoria = [];
  //Arreglo de los colores que vamos a pasar
  private colores = [];

  constructor() {
    this.datos=[['10'],['9'],['5'],['0']];
    //this.datos=[['10','0','0'],['0','9','0'],['0','0','7']];
    //this.datos=[['1','10','20'],['6','8','9'],['4','5','10']];
    //this.nombreCategoria=['Plan Basico','Plan Full','Pase Libre'];
    this.nombreCategoria=['Plan Basico','Plan Full','Pase Libre'];
    this.colores=['blue','red','green'];
    this.barChartData = [];
    this.chartColors = [];
    
    for (const index in this.datos) {
      this.barChartData.push({ data: this.datos[index], label: this.nombreCategoria[index] });
      this.chartColors.push({backgroundColor: this.colores[index]});
    }
  }

  ngOnInit() {
  }

}







  
