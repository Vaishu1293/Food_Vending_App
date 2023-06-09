import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-graph4',
  templateUrl: './graph4.component.html',
  styleUrls: ['./graph4.component.css']
})
export class Graph4Component implements OnInit {

    constructor() { }
    
    @ViewChild('canvas4', { static: true }) canvas4!: ElementRef;

  
  lineChartData: ChartDataSets[] = [
        { 
            data: [10, 25, 20, 40, 30, 40, 30, 50, 20],
            label: 'Sales Stats',
            borderColor: 'transparent',
            pointBackgroundColor: '#AC4CBC',
            pointBorderColor: '#AC4CBC',
            borderWidth:4,
            // borderRadius:'10',
            pointHoverBackgroundColor: '#AC4CBC',
            pointHoverBorderColor: '#AC4CBC',
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
      const gradient = this.canvas4.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 500, 1);
      gradient.addColorStop(0, "rgba(172, 76, 188, 1)");
      gradient.addColorStop(1, "rgba(224, 98, 245, 0.5)");
      
      this.lineChartColors = [
          {
              backgroundColor: gradient
          }
      ];
  }

}
