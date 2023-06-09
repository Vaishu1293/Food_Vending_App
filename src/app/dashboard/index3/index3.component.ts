import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index3',
  templateUrl: './index3.component.html',
  styleUrls: ['./index3.component.css']
})
export class Index3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  quickTransfer = [
        {
          price: "$65,123",
          success: "4%(30 days)",
          svg_image: 'assets/images/currency/1.svg',
        },
        {
          price: "$65,123",
          success: "4%(30 days)",
          svg_image: 'assets/images/currency/2.svg',
        },
        {
          price: "$65,123",
          success: "4%(30 days)",
          svg_image: 'assets/images/currency/3.svg',
        },
        {
          price: "$65,123",
          success: "4%(30 days)",
          svg_image: 'assets/images/currency/4.svg',
        },
  ];
  buyFormData = [
        {
          title: "Amount",
          text_box_val: "1.00000000",
          button_val: 'ETH',
        },
        {
          title: "Price",
          text_box_val: "0.03240000",
          button_val: 'BTC',
        },
        {
          title: "Total",
          text_box_val: "1.00000000",
          button_val: 'DASH',
        },
        {
          title: "Fee(0.2%)",
          text_box_val: "0.03246480",
          button_val: 'ETH',
        },
        {
          title: "Total+Fee",
          text_box_val: "1.00000000",
          button_val: 'BTC',
        },
  ];
  
  sellFormData = [
        {
          title: "Amount",
          text_box_val: "1.00000000",
          button_val: 'ETH',
        },
        {
          title: "Price",
          text_box_val: "0.03240000",
          button_val: 'BTC',
        },
        {
          title: "Total",
          text_box_val: "1.00000000",
          button_val: 'DASH',
        },
        {
          title: "Fee(0.2%)",
          text_box_val: "0.03246480",
          button_val: 'ETH',
        },
        {
          title: "Total+Fee",
          text_box_val: "1.00000000",
          button_val: 'BTC',
        },
  ];

}
