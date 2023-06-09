import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  // ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  // ApexFill,
  // ApexTooltip,
  ApexMarkers,
  ApexGrid,
  ApexResponsive,
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  dataLabels: ApexDataLabels | any;
  yaxis: ApexYAxis | any;
  title: ApexTitleSubtitle | any;
  labels: string[] | any;
  legend: ApexLegend | any;
  subtitle: ApexTitleSubtitle | any;
  colors: string[] | any;
  markers: ApexMarkers | any;
  grid: ApexGrid | any;
  responsive: ApexResponsive[] | any;
};


@Component({
  selector: 'app-das2-graph1',
  templateUrl: './das2-graph1.component.html',
  styleUrls: ['./das2-graph1.component.css']
})
export class Das2Graph1Component implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
		  data: [
            [1327359600000,31.95],
            [1327532400000,32],
            [1327878000000,33.00],
            [1328050800000,32.50],
            [1328223600000,31.85],
            [1328569200000,32.28],
            [1328742000000,32.65],
            [1329087600000,32.35],
            [1329260400000,32.46],
            [1329433200000,32.75],
            [1329865200000,32.33],
            [1330038000000,33.41],
            [1330383600000,33.27],
            [1330556400000,33.10],
            [1330902000000,33.22],
            [1331074800000,32.41],
            [1331247600000,33.64],
            [1331593200000,34.22],
            [1331766000000,34.17],
            [1332111600000,34.51],
            [1332284400000,33.56],
            [1332457200000,33.81],
            [1332799200000,34.63],
            [1332972000000,34.48],
            [1333317600000,34.70],
            [1333490400000,33.46],
            [1333922400000,33.22],
            [1334095200000,33.01],
            [1334268000000,33.18],
            [1334613600000,33.84],
            [1334786400000,32.91],
            [1335132000000,32.62],
            [1335304800000,33.13],
            [1335477600000,33.58],
            [1335823200000,33.77],
            [1335996000000,33.32],
            [1336082400000,32.61],
            [1336428000000,32.67],
            [1336600800000,31.92],
            [1336946400000,32.23],
            [1337119200000,32.36],
          ]
          
        }],
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 150,
		  width: '100%',
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			},
		  toolbar: {
				show: false
			},
        },
        colors:['#AC4CBC', '#AC4CBC', '#AC4CBC'],
        dataLabels: {
          enabled: false
          },
        markers: {
          size: 0,
        },
        xaxis: {
			type: 'datetime',
			 labels: {
              show: false,
			  format: 'MMM',
			},
			axisBorder: {
				  show: false,
				},
        },
		
        yaxis: {
            show: false
        },
        grid: {
            show: false,
        },
            
		legend:{
			show:false
		},
        responsive: [{
          breakpoint: 1024,
          options: {
			   chart: {
				width: '100%',
			   }
				
		  }
        }],
    };
  }
  
  ngOnInit(): void {
  }

}
