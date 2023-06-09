import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexFill,
  ApexTooltip,
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  yaxis: ApexYAxis | any;
  title: ApexTitleSubtitle | any;
  labels: string[] | any;
  legend: ApexLegend | any;
  subtitle: ApexTitleSubtitle | any;
  colors: string[] | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
};

@Component({
  selector: 'app-graph-crypto-statistics',
  templateUrl: './graph-crypto-statistics.component.html',
  styleUrls: ['./graph-crypto-statistics.component.css']
})
export class GraphCryptoStatisticsComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
          name: 'series1',
          data: [30, 50, 40, 50, 50, 40, 30, 45, 55, 65, 50]
        }, {
          name: 'series2',
          data: [20, 40, 30, 40, 40, 30, 20, 35, 45, 55, 40]
        }],
        chart: {
          height: 360,
		  toolbar:{
			show:false
		  },
          type: 'area'
        },
        colors:['#FFAB2D','#AC4CBC'],
		legend:{
			show:false
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
			width:4,
          curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '14px',
				   fontFamily: 'Poppins',
				  fontWeight: 100,
				  
				},
			  },
		},
		yaxis: {
			show:false
		},
		fill:{
			opacity:0.2,
			type:'solid'
		},
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
    };
  }
  
  
  ngOnInit(): void {
  }

}
