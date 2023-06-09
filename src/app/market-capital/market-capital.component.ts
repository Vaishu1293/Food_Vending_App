import { Component, OnInit, ViewChild } from '@angular/core';
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
  grid: ApexGrid | any;
};


@Component({
  selector: 'app-market-capital',
  templateUrl: './market-capital.component.html',
  styleUrls: ['./market-capital.component.css']
})
export class MarketCapitalComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [6,2,8,4,3,8,1,3,6,5,9]
        },
      ],
      chart: {
        type: "bar",
        width: 220,
		height:120,
        toolbar:{
            show:false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['#363062']
      },
      xaxis: {
        labels: {
          show: false,
        }
      },
      yaxis: {
         show: false,
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        enabled: false,
      },
      grid: {
          show: false,
      }

    };
  }
  
  
  
  marketHolding = [
        {
          rank: "#1",
          rank_class: "bgl-primary",
          coin_image: "assets/images/coin/eth.svg",
          name: "Ethereum",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "4%",
          variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#2",
          rank_class: "bgl-primary",
          coin_image: "assets/images/coin/btc.svg",
          name: "Bitcoin",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "0.5%",
          variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#3",
          rank_class: "bgl-primary",
          coin_image: "assets/images/coin/mon.svg",
          name: "Monero",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "0.45%",
          variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#4",
          rank_class: "",
          coin_image: "assets/images/coin/ltc.svg",
          name: "Litecoin",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "0.4%",
          variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#5",
          rank_class: "",
          coin_image: "assets/images/coin/eth.svg",
          name: "Ethereum",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "0.7%",
          variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#6",
          rank_class: "",
          coin_image: "assets/images/coin/btc.svg",
          name: "XRP",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "0.5%",
          variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#7",
          rank_class: "",
          coin_image: "assets/images/coin/ltc.svg",
          name: "Litecoin",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "0.4%",
          variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#8",
          rank_class: "",
          coin_image: "assets/images/coin/btc.svg",
          name: "Bitcoin",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "0.5%",
          variation_class: "fa-caret-up text-success",
        },
        {
          rank: "#9",
          rank_class: "",
          coin_image: "assets/images/coin/eth.svg",
          name: "Ethereum",
          price: "$11,911.48",
          change: "2,54%",
          volume: "$220,083,007,631",
          variation: "0.45%",
          variation_class: "fa-caret-up text-success",
        },
  ];
  
  ngOnInit(): void {
  }

}
