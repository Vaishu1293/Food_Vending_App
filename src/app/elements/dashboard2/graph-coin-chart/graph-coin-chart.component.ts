import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexResponsive,
  ApexMarkers,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  responsive: ApexResponsive[] | any;
  markers: ApexMarkers | any;
  grid: ApexGrid | any;
};


@Component({
  selector: 'app-graph-coin-chart',
  templateUrl: './graph-coin-chart.component.html',
  styleUrls: ['./graph-coin-chart.component.css']
})
export class GraphCoinChartComponent implements OnInit {

  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [{
					name: 'Buy',
					data: [{
					  x: '2:00PM',
					  y: [9200.00, 9600.00]
                      }, {
					  x: '2:30PM',
					  y: [9300.00, 9600.00]
					}, {
					  x: '3:00PM',
					  y: [9150.00, 9500.00]
					}, {
					  x: '3:30PM',
					  y: [9300.00, 9700.00]
					}, {
					  x: '4:00PM',
					  y: [9200.00, 9600.00]
					}, {
					  x: '4:30PM',
					  y: [9400.00, 9700.00]
					}, {
					  x: '5:00PM',
					  y: [9400.00, 9600.00]
					}, {
					  x: '5:30PM',
					  y: [9300.00, 9600.00]
					}, {
					  x: '6:00PM',
					  y: [9300.00, 9500.00]
					}, {
					  x: '6:30PM',
					  y: [9200.00, 9500.00]
					}, {
					  x: '7:00PM',
					  y: [9450.00, 9650.00]
					}, {
					  x: '7:30PM',
					  y: [9400.00, 9700.00]
					}, {
					  x: '8:00PM',
					  y: [9300.00, 9700.00]
					}/* , {
					  x: '5:00PM',
					  y: [9400.00, 9600.00]
					}, {
					  x: '5:30PM',
					  y: [9300.00, 9600.00]
					}, {
					  x: '6:00PM',
					  y: [9300.00, 9500.00]
					}, {
					  x: '6:30PM',
					  y: [9200.00, 9500.00]
					}, {
					  x: '7:00PM',
					  y: [9450.00, 9650.00]
					}, {
					  x: '7:30PM',
					  y: [9400.00, 9700.00]
					}, {
					  x: '8:00PM',
					  y: [9300.00, 9700.00]
					}, {
					  x: '6:30PM',
					  y: [9200.00, 9500.00]
					}, {
					  x: '8:00PM',
					  y: [9300.00, 9700.00]
					}, {
					  x: '5:00PM',
					  y: [9400.00, 9600.00]
					} */]
				}, {
					name: 'Sell',
					data: [{
					  x: '2:00PM',
					  y: [9370.00, 9550.00]
					}, {
					  x: '2:30PM',
					  y: [9350.00, 9700.50]
					}, {
					  x: '3:00PM',
					  y: [9275.00, 9482.00]
					}, {
					  x: '3:30PM',
					  y: [9200.00, 9600.00]
					}, {
					  x: '4:00PM',
					  y: [9250.00, 9500.00]
					}, {
					  x: '4:30PM',
					  y: [9445.00, 9523.00]
					}, {
					  x: '5:00PM',
					  y: [9440.00, 9667.00]
					}, {
					  x: '5:30PM',
					  y: [9300.00, 9600.00]
					}, {
					  x: '6:00PM',
					  y: [9445.00, 9648.00]
					}, {
					  x: '6:30PM',
					  y: [9240.00, 9700.00]
					}, {
					  x: '7:00PM',
					  y: [9130.00, 9550.00]
					}, {
					  x: '7:30PM',
					  y: [9340.00, 9440.00]
					}, {
					  x: '8:00PM',
					  y: [9560.00, 9740.00]
					}/*, {
					  x: '5:00PM',
					  y: [9440.00, 9667.00]
					}, {
					  x: '5:30PM',
					  y: [9300.00, 9600.00]
					}, {
					  x: '6:00PM',
					  y: [9445.00, 9648.00]
					}, {
					  x: '6:30PM',
					  y: [9240.00, 9700.00]
					}, {
					  x: '7:00PM',
					  y: [9130.00, 9550.00]
					} , {
					  x: '7:30PM',
					  y: [9340.00, 9440.00]
					}, {
					  x: '8:00PM',
					  y: [9560.00, 9740.00]
					}, {
					  x: '8:00PM',
					  y: [9560.00, 9740.00]
					}, {
					  x: '7:00PM',
					  y: [9130.00, 9550.00]
					}, {
					  x: '7:30PM',
					  y: [9340.00, 9440.00]
					} */]
				}],
            chart: {
				type: 'rangeBar',
				height: 300,
				
				toolbar: {
					show: false,
				},
				
			},plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '25%',
				// endingShape: "rounded",
				// startingShape: "rounded",
				
			  },
			},
			colors:['#61C277', '#FF3E3E'],
			dataLabels: {
			  enabled: false,
			},
			markers: {
				shape: "circle",
			},
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 10,
				height: 18,
				strokeWidth: 0,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
			  show: true,
			  width: 1,
			  colors: ['transparent']
			},
			grid: {
				borderColor: '#eee',
			},
			xaxis: {
				
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '12px',
				  fontFamily: 'poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
			  show: false,
			  }
			},
			yaxis: {
				opposite: true,
				labels: {
					offsetX:0,
				   style: {
					  colors: '#787878',
					  fontSize: '12px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			fill: {
			  opacity: 1,
			  colors:['#61C277', '#FF3E3E'],
			},
			tooltip: {
			  y: {
				formatter: function (val:any) {
				  return "$ " + val + " thousands"
				}
			  }
			},
			 responsive: [{
				breakpoint: 575,
				options: {
					/* series: [{
						name: 'Buy',
						data: [{
						  x: '2:00PM',
						  y: [9200.00, 9600.00]
						  }, {
						  x: '2:30PM',
						  y: [9300.00, 9600.00]
						}, {
						  x: '3:00PM',
						  y: [9150.00, 9500.00]
						}, {
						  x: '3:30PM',
						  y: [9300.00, 9700.00]
						}, {
						  x: '4:00PM',
						  y: [9200.00, 9600.00]
						}, {
						  x: '4:30PM',
						  y: [9400.00, 9700.00]
						}, {
						  x: '5:00PM',
						  y: [9400.00, 9600.00]
						}]
					}, {
						name: 'Sell',
						data: [{
						  x: '2:00PM',
						  y: [9370.00, 9550.00]
						}, {
						  x: '2:30PM',
						  y: [9350.00, 9700.50]
						}, {
						  x: '3:00PM',
						  y: [9275.00, 9482.00]
						}, {
						  x: '3:30PM',
						  y: [9200.00, 9600.00]
						}, {
						  x: '4:00PM',
						  y: [9250.00, 9500.00]
						}, {
						  x: '4:30PM',
						  y: [9445.00, 9523.00]
						}, {
						  x: '5:00PM',
						  y: [9440.00, 9667.00]
						}]
					}], */
					plotOptions: {
					  bar: {
						columnWidth: '35%',
						
					  },
					},
					chart:{
						height:250,
					},
					xaxis: {
				
					  labels: {
					   style: {
						  fontSize: '10px',
						},
					  },
					},
				}
			 }]
    };
  }


  ngOnInit(): void {
  }

}
