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
  selector: 'app-detail-pie-chart',
  templateUrl: './detail-pie-chart.component.html',
  styleUrls: ['./detail-pie-chart.component.css']
})
export class DetailPieChartComponent implements OnInit {
    
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [28, 9, 21, 18, 24],
        chart: {
          type: 'donut',
		  width:210,
        },
      // labels: ["Installment", "Rent", "Investment", "Restaurant", "Food"],
      stroke: {
          width: 3,
      },
      colors:['#3A82EF', '#EE3CD2', '#FFB038', '#FF495F', '#5EE173'],
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
