import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-stathorarios',
  templateUrl: './stathorarios.component.html',
  styleUrls: ['./stathorarios.component.css']
})
export class StathorariosComponent implements OnInit {

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
 public barChartLabels: Label[] = ['9 hs', '10 hs','11 hs','12 hs','13 hs','cerrado','16 hs','17 hs','18 hs','19 hs','20 hs','21 hs'];
  //Tipo de grafico que queremos: ejem: line, bar, radar
  public barChartType: ChartType = 'line';
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
    this.generar();
  }
  generar(){
        //this.datos=[['10'],['9'],['5'],['0']];
        this.datos=['10','5','7','10','9','0','5','7','10','9','15','4'];
        //this.datos=[['1','10','20'],['6','8','9'],['4','5','10']];
        //this.nombreCategoria=['Plan Basico','Plan Full','Pase Libre'];
        this.nombreCategoria=['Cantidad'];
        this.colores=['rgba(0,255,0,0.5)'];
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
