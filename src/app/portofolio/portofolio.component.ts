import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  coinHolding = [
        {
          image: "assets/images/coin/coin_holding/1.svg",
          name: "Ethereum",
          short_name: "ETH",
          price: "$168,331.09",
          up_down: "45% This Week",
          up_down_image: "assets/images/svg/chevron_up.svg",
          buy: "$5,673",
          sell: "$5,982",
          border_class: "border-secondary",
          bg_class: "bg-secondary",
        },
        {
          image: "assets/images/coin/coin_holding/2.svg",
          name: "Bitcoin",
          short_name: "BTC",
          price: "$168,331.09",
          up_down: "45% This Week",
          up_down_image: "assets/images/svg/chevron_up.svg",
          buy: "$5,673",
          sell: "$5,982",
          border_class: "border-warning",
          bg_class: "bg-warning",
        },
        {
          image: "assets/images/coin/coin_holding/3.svg",
          name: "Digital Cash",
          short_name: "DASH",
          price: "$168,331.09",
          up_down: "45% This Week",
          up_down_image: "assets/images/svg/chevron_up.svg",
          buy: "$5,673",
          sell: "$5,982",
          border_class: "border-info",
          bg_class: "bg-info",
        },
        {
          image: "assets/images/coin/coin_holding/4.svg",
          name: "Zcash",
          short_name: "ZEC",
          price: "$168,331.09",
          up_down: "45% This Week",
          up_down_image: "assets/images/svg/chevron_up.svg",
          buy: "$5,673",
          sell: "$5,982",
          border_class: "border-primary",
          bg_class: "bg-primary",
        },
  ];

}
