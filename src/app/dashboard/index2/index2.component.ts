import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {

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
  

}
