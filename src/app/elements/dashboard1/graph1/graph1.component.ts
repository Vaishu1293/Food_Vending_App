import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {

    constructor() { }
    
    @ViewChild('canvas', { static: true }) canvas!: ElementRef;

  
  lineChartData: ChartDataSets[] = [
        { 
            data: [10, 30, 20, 40, 30, 40, 30, 50, 35],
            label: 'Sales Stats',
            borderColor: 'transparent',
            pointBackgroundColor: '#FFAB2D',
            pointBorderColor: '#FFAB2D',
            borderWidth:4,
            // borderRadius:10,
            pointHoverBackgroundColor: '#FFAB2D',
            pointHoverBorderColor: '#FFAB2D',
            // backgroundColor: widgetChartgradientStroke,
        },
  ];

  lineChartLabels: Label[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];

  lineChartOptions:any = {
    title: {
        display: !1
    },
    tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
    },
    
    legend: {
        display: !1
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
        mode: "index"
    },
    scales: {
        xAxes: [{
            display: !1,
            gridLines: !1,
            scaleLabel: {
                display: !0,
                labelString: "Month"
            }
        }],
        yAxes: [{
            display: !1,
            gridLines: !1,
            scaleLabel: {
                display: !0,
                labelString: "Value"
            },
            ticks: {
                beginAtZero: !0
            }
        }]
    },
    elements: {
        point: {
            radius: 0,
            borderWidth: 0
        }
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0
        }
    }
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255, 171, 45, 1)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType:any = 'line';

// ngOnInit() {}

  ngOnInit() {
      const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 500, 1);
      gradient.addColorStop(0, "rgba(255, 171, 45, 1)");
      gradient.addColorStop(1, "rgba(255, 247, 45, 0.5)");
      
      this.lineChartColors = [
          {
              backgroundColor: gradient
          }
      ];
  }

}
