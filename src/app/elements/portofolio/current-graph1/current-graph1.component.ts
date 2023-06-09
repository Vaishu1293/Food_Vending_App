import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexNonAxisChartSeries,  ApexResponsive, ApexChart, ApexDataLabels, ApexStroke, ApexLegend } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  dataLabels: ApexDataLabels | any;
  stroke: ApexStroke | any;
  colors: string[] | any;
  legend: ApexLegend | any;
};


@Component({
  selector: 'app-current-graph1',
  templateUrl: './current-graph1.component.html',
  styleUrls: ['./current-graph1.component.css']
})
export class CurrentGraph1Component implements OnInit {
    
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [34, 12, 41, 22, 15],
        chart: {
          type: 'donut',
		  width:200
        },
      // labels: ["Installment", "Rent", "Investment", "Restaurant", "Food"],
      stroke: {
          width: 0,
      },
      colors:['#3C8AFF', '#ED3DD1', '#FFEE54', '#FF5166', '#2BC844'],
      dataLabels: {
          enabled: false
        },
      responsive: [
        {
          breakpoint: 575,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom",
              show:false
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
